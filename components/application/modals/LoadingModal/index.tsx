import { View, Text, Modal } from 'react-native'
import React from 'react'
import LoadingPage from '@/pages/LoadingPage'

type LoadingModalProps = {
    visible: boolean
}

export default function LoadingModal(props: LoadingModalProps) {
    return (
        <Modal visible={props.visible}>
            <LoadingPage />
        </Modal>
    )
}