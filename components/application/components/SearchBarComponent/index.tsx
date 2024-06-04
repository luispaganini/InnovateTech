import React from 'react'
import { SearchBarContainer, SearchBarInput, SearchBarStructure } from './styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchBarComponentProps {
    setQuery: (query: string) => void;
    query: string;
    testID?: string
}

export default function SearchBarComponent(props: SearchBarComponentProps) {
    const colorScheme = useColorScheme();

    return (
        <SearchBarContainer colorTheme={colorScheme}>
            <SearchBarStructure>
                <SearchBarInput
                    colorTheme={colorScheme}
                    onChangeText={(text) => props.setQuery(text)}
                    value={props.query}
                    placeholder="Busca..."
                    placeholderTextColor={colorScheme === 'light' ? Colors.light.text : Colors.dark.text}
                />
                <TouchableOpacity>
                    <Ionicons name="search" size={20} color={colorScheme === 'light' ? Colors.light.text : Colors.dark.text} />
                </TouchableOpacity>
            </SearchBarStructure>
        </SearchBarContainer>
    )
}