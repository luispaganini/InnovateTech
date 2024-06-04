import { FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoadingMoreComponent from '@/components/application/components/LoadingMoreComponent'
import SearchAndFilterComponent from '@/components/application/components/SearchAndFilterComponent'
import { ContentHome, HomeMainContainer, SafeAreaViewHome, TitleText } from './styles'
import IUserInterface from '@/interfaces/IUserInterface'
import appConfig from '@/app.json'
import { getUserInfoByPage } from '@/services/randomUsers/userInfo'
import { useUsersListStore, userListInfoStore } from '@/store/Users'
import NoDataComponent from '@/components/application/components/NoDataComponent'
import CardComponent from '@/components/application/components/CardComponent'
import UserDetailsModal from '@/components/application/modals/UserDetailsModal'
import LoadingModal from '@/components/application/modals/LoadingModal'
import GenderFilterModal from '@/components/application/modals/GenderFilterModal'

export default function HomePage() {
    const firstUsers = useUsersListStore();
    const listInfo = userListInfoStore();
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState<IUserInterface[]>(firstUsers.firstUsers);
    const [seed, setSeed] = useState(firstUsers.userSeed);
    const [selectedUser, setSelectedUser] = useState<IUserInterface | null>(null);
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [gender, setGender] = useState('all');	

    useEffect(() => {
        if (users.length === 0)
            loadData();
        else
            listInfo.setLoading(false);
    }, []);

    const loadData = async () => {
        listInfo.setLoading(true);
        try {
            if (firstUsers.firstUsers.length > 0) {
                setUsers(firstUsers.firstUsers);
                setSeed(firstUsers.userSeed);
                return;
            }
            const userList = await getUserInfoByPage({
                page: 1,
                nationality: appConfig.infoApplication.nationality,
                results: appConfig.infoApplication.sizeList,
                seed
            });
            firstUsers.setFirstUsers(userList.results);
            setUsers(userList.results);
            listInfo.setHasMore(userList.results.length == appConfig.infoApplication.sizeList)
            firstUsers.setUserSeed(userList.info.seed);
        } catch (error) {
            console.error(error);
        } finally {
            listInfo.setPage(2);
            listInfo.setLoading(false);
        }
    }

    const loadMoreData = async () => {
        listInfo.setLoading(false)
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

    const filteredUsers = users.filter(user => {
        const matchesSearchQuery = user.name.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.name.last.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesGender = gender === 'all' || user.gender.toLowerCase() === gender.toLowerCase();

        return matchesSearchQuery && matchesGender;
    });

    return (
        <SafeAreaViewHome>
            {(listInfo.loading) ? <LoadingModal visible={true} /> : (
                <HomeMainContainer>
                    <TitleText type='title'>InnovateTech</TitleText>
                    <SearchAndFilterComponent
                        setQuery={setSearchQuery}
                        query={searchQuery}
                        onClickFilter={() => setFilterModalVisible(true)}
                    />
                    <ContentHome>
                        <FlatList
                            data={filteredUsers}
                            keyExtractor={(item) => item.id.value}
                            renderItem={({ item }) => <CardComponent
                                user={item}
                                onPress={() => setSelectedUser(item)} />}
                            onEndReached={loadMoreData}
                            onEndReachedThreshold={0.2}
                            ListFooterComponent={renderFooter}
                            ListEmptyComponent={() => <NoDataComponent onPress={loadData} />}
                            onRefresh={loadData}
                            refreshing={listInfo.loading}
                        />
                    </ContentHome>
                </HomeMainContainer>
            )}
            <UserDetailsModal
                onClose={() => setSelectedUser(null)}
                user={selectedUser}
                visible={selectedUser != null}
            />
            <GenderFilterModal 
                onApply={() => { }} 
                onClose={() => setFilterModalVisible(false)} 
                visible={filterModalVisible} 
                gender={gender}
                setGender={setGender}
            />
        </SafeAreaViewHome >
    )
}