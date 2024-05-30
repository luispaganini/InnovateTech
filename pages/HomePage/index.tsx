import { ActivityIndicator, Button, FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import CardComponent from '@/components/application/CardComponent'
import LoadingMoreComponent from '@/components/application/LoadingMoreComponent'
import SearchAndFilterComponent from '@/components/application/SearchAndFilterComponent'
import { ContentHome, TitleText } from './styles'
import IUserInterface from '@/interfaces/IUserInterface'
import appConfig from '@/app.json'
import { getUserInfoByPage } from '@/services/randomUsers/userInfo'
import { useUsersListStore, userListInfoStore } from '@/store/Users'

export default function HomePage() {
    const firstUsers = useUsersListStore();
    const listInfo = userListInfoStore();
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState<IUserInterface[]>(firstUsers.firstUsers);
    const [seed, setSeed] = useState(firstUsers.userSeed);

    useEffect(() => {
        if (users.length === 0)
            loadData();
    }, [])

    useEffect(() => {
        console.log(users.length)
    }, [users])

    const loadData = async () => {
        listInfo.setLoading(true);
        try {
            if (firstUsers.firstUsers.length > 0) {
                setUsers(firstUsers.firstUsers);
                setSeed(firstUsers.userSeed);
                listInfo.setPage(2);
                return;
            }
            
            const userList = await getUserInfoByPage({
                page: listInfo.page,
                nationality: appConfig.infoApplication.nationality,
                results: appConfig.infoApplication.sizeList,
                seed
            });
            firstUsers.setFirstUsers(userList.results);
            setUsers(userList.results);
            listInfo.setHasMore(userList.results.length == appConfig.infoApplication.sizeList)
            listInfo.setPage(2);
            firstUsers.setUserSeed(userList.info.seed);
        } catch (error) {
            console.error(error);
        } finally {
            listInfo.setLoading(false);
        }
    }

    const loadMoreData = async () => {
        if (listInfo.loadingMore || !listInfo.hasMore) return;

        listInfo.setLoadingMore(true);
        try {
            const userList = await getUserInfoByPage({
                page: listInfo.page,
                nationality: appConfig.infoApplication.nationality,
                results: appConfig.infoApplication.sizeList,
                seed
            });
            setUsers(prevData => [...prevData, ...userList.results]);
            listInfo.setPage(listInfo.page + 1);
            listInfo.setHasMore(userList.results.length === appConfig.infoApplication.sizeList);
        } catch (error) {
             console.error(error);
        } finally {
            listInfo.setLoadingMore(false);
        }
    };

    const renderFooter = () => {
        if (!listInfo.loadingMore) return null;

        return <LoadingMoreComponent />
    };

    const renderEmpty = () => (
        <View>
            <Text>No Data at the moment</Text>
            <Button onPress={() => loadData()} title='Refresh' />
        </View>
    )

    return (
        <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, paddingBottom: 30, flex: 1 }}>
            <ThemedView>
                <TitleText type='title'>InnovateTech</TitleText>
                <SearchAndFilterComponent setQuery={setSearchQuery} query={searchQuery} onSubmit={() => { }} onClickFilter={() => { }} />
                <ContentHome>
                    <FlatList
                        data={users}
                        keyExtractor={(item) => item.id.value}
                        renderItem={({ item }) => <CardComponent user={item} />}
                        onEndReached={loadMoreData}
                        onEndReachedThreshold={0.2}
                        ListFooterComponent={renderFooter}
                        ListEmptyComponent={renderEmpty}
                        onRefresh={loadData}
                        refreshing={listInfo.loading}
                    />
                </ContentHome>
            </ThemedView>
        </SafeAreaView>
    )
}