import React from 'react'
import { SearchBarContainer, SearchBarInput, SearchBarStructure } from './styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ThemedText';
import { TextInput, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedView } from '@/components/ThemedView';

interface SearchBarComponentProps {
    setQuery: (query: string) => void;
    query: string;
    onSubmit: () => void;
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
                <TouchableOpacity onPress={props.onSubmit}>
                    <Ionicons name="search" size={20} color={colorScheme === 'light' ? Colors.light.text : Colors.dark.text} />
                </TouchableOpacity>
            </SearchBarStructure>
        </SearchBarContainer>
    )
}