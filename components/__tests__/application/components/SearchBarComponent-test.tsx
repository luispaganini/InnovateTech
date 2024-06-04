import React from 'react';
import TestRenderer from 'react-test-renderer';
import { SearchBarInput } from '@/components/application/components/SearchBarComponent/styles';
import SearchBarComponent from '@/components/application/components/SearchBarComponent';

describe('SearchBarComponent', () => {
    it('renders correctly', () => {
        const setQuery = jest.fn();
        const testRenderer = TestRenderer.create(<SearchBarComponent setQuery={setQuery} query="" />);
        const testInstance = testRenderer.root;

        expect(testInstance.findByType(SearchBarComponent)).toBeTruthy();
    });

    it('calls setQuery on text change', () => {
        const setQuery = jest.fn();
        const testRenderer = TestRenderer.create(<SearchBarComponent setQuery={setQuery} query="" />);
        const testInstance = testRenderer.root;

        const searchBarInput = testInstance.findByType(SearchBarInput);
        searchBarInput.props.onChangeText('Teste');

        expect(setQuery).toHaveBeenCalledWith('Teste');
    });
});
