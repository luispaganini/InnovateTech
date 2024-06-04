import GenderFilterModal from '@/components/application/modals/GenderFilterModal';
import React from 'react';
import { Button } from 'react-native';
import TestRenderer from 'react-test-renderer';

describe('GenderFilterModal', () => {
    it('renders correctly', () => {
        const setGender = jest.fn();
        const onClose = jest.fn();
        const onApply = jest.fn();
        const testRenderer = TestRenderer.create(<GenderFilterModal visible={true} gender="all" setGender={setGender} onClose={onClose} onApply={onApply} />);
        const testInstance = testRenderer.root;

        expect(testInstance.findByType(GenderFilterModal)).toBeTruthy();
    });

    it('calls setGender and onClose on apply', () => {
        const setGender = jest.fn();
        const onClose = jest.fn();
        const onApply = jest.fn();
        const testRenderer = TestRenderer.create(<GenderFilterModal visible={true} gender="all" setGender={setGender} onClose={onClose} onApply={onApply} />);
        const testInstance = testRenderer.root;

        const button = testInstance.findAllByType(Button)[1];
        button.props.onPress();

        expect(setGender).toHaveBeenCalledWith('all');
        expect(onClose).toHaveBeenCalled();
    });
});
