import React from 'react';
import TestRenderer from 'react-test-renderer';
import LoadingPage from '@/pages/LoadingPage';
import LoadingModal from '@/components/application/modals/LoadingModal';

describe('LoadingModal', () => {
    it('renders correctly', () => {
        const testRenderer = TestRenderer.create(<LoadingModal visible={true} />);
        const testInstance = testRenderer.root;

        expect(testInstance.findByType(LoadingModal)).toBeTruthy();
    });

    it('renders LoadingPage when visible is true', () => {
        const testRenderer = TestRenderer.create(<LoadingModal visible={true} />);
        const testInstance = testRenderer.root;

        expect(testInstance.findByType(LoadingPage)).toBeTruthy();
    });

    it('does not render LoadingPage when visible is false', () => {
        const testRenderer = TestRenderer.create(<LoadingModal visible={false} />);
        const testInstance = testRenderer.root;

        expect(() => testInstance.findByType(LoadingPage)).toThrow();
    });
});
