import IUserInterface from '@/interfaces/IUserInterface';
import api from '../api';
import IUserInfoFilter from '@/interfaces/api/IUserInfoFilter';
import IUserInfoResponse from '@/interfaces/api/IUserInfoResponse';
import { AxiosResponse } from 'axios';

export async function getUserInfoByPage(props: IUserInfoFilter): Promise<IUserInfoResponse> {
    const response: AxiosResponse<IUserInfoResponse> = await api.get('', {
        params: {
            results: props.results,
            nat: props.nationality,
            seed: props.seed,
            page: props.page
        }
    });
    // `?results=${props.results}&nat=${props.nationality}&seed=${props.seed}
    if (response.status !== 200)
        throw new Error('Não foi possível buscar os usuários.');

    return response.data;
}