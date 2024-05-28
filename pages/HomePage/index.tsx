import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import CardComponent from '@/components/application/CardComponent'
import LoadingMoreComponent from '@/components/application/LoadingMoreComponent'
import SearchAndFilterComponent from '@/components/application/SearchAndFilterComponent'
import { ContentHome, TitleText } from './styles'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <ThemedView>
        <TitleText type='title'>InnovateTech</TitleText>
        <SearchAndFilterComponent setQuery={setSearchQuery} query={searchQuery} onSubmit={() => { }} onClickFilter={() => { }} />
        <ContentHome>
          <CardComponent user={{name: "Ricardo", dateOfBirth: new Date(), lastName: "Jonas", sex: "male"}}/>
          <LoadingMoreComponent />
        </ContentHome>
      </ThemedView>
    </SafeAreaView>
  )
}