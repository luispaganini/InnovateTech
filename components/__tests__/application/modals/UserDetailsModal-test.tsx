import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import IUserInterface from '@/interfaces/IUserInterface';
import UserDetailsModal from '@/components/application/modals/UserDetailsModal';

const mockUser: IUserInterface = {
    gender: "female",
    name: {
        title: "Mrs",
        first: "Perpétua",
        last: "Gomes"
    },
    location: {
        street: {
            number: 281,
            name: "Rua Amazonas "
        },
        city: "Araras",
        state: "Goiás",
        country: "Brazil",
        postcode: 21660,
        coordinates: {
            latitude: "-74.6426",
            longitude: "173.3337"
        },
        timezone: {
            offset: "-9:00",
            description: "Alaska"
        }
    },
    email: "perpetua.gomes@example.com",
    login: {
        uuid: "c7510105-283f-45bb-8d72-c78140925547",
        username: "blackrabbit543",
        password: "iceman1",
        salt: "Hn8wQTrZ",
        md5: "c86397fe886a0fcd63dff94dd02b2540",
        sha1: "47a2e1c8a869250f88997a2df0614f61a8767547",
        sha256: "9b9ee780cbf9f5832f625b35690449076156ecfb28e90c5c101b7ef561165f65"
    },
    dob: {
        date: "1973-05-07T08:44:57.810Z",
        age: 51
    },
    registered: {
        date: "2003-07-16T16:29:51.731Z",
        age: 20
    },
    phone: "(05) 1333-4691",
    cell: "(03) 2876-7794",
    id: {
        name: "CPF",
        value: "226.682.609-02"
    },
    picture: {
        large: "https://randomuser.me/api/portraits/women/25.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg"
    },
    nat: "BR"
}

describe('UserDetailsModal', () => {
    it('renders correctly with a user', () => {
        const { getByText } = render(<UserDetailsModal visible={true} onClose={jest.fn()} user={mockUser} />);
        expect(getByText('E-mail: perpetua.gomes@example.com')).toBeTruthy();
        expect(getByText('Sex: female')).toBeTruthy();
    });

    it('calls onClose when the modal is pressed', () => {
        const onClose = jest.fn();
        const { getByTestId } = render(<UserDetailsModal visible={true} onClose={onClose} user={mockUser} />);
        fireEvent.press(getByTestId('LeaveModalContainer'));
        expect(onClose).toHaveBeenCalled();
    });
});
