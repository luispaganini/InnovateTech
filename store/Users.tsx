import IUserInterface from '@/interfaces/IUserInterface';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type UserListInfoState = {
    hasMore: boolean;
    loading: boolean;
    loadingMore: boolean;
    page: number;
    setHasMore: (hasMore: boolean) => void;
    setLoading: (loading: boolean) => void;
    setLoadingMore: (loadingMore: boolean) => void;
    setPage: (page: number) => void;
}

type UsersListState = {
    firstUsers: IUserInterface[];
    setFirstUsers: (users: IUserInterface[]) => void;
    userSeed: string;
    setUserSeed: (seed: string) => void;
  };

export const userListInfoStore = create<UserListInfoState>((set) => ({
    hasMore: true,
    loading: false,
    loadingMore: false,
    page: 1,
    setHasMore: (hasMore: boolean) => set({ hasMore }),
    setLoading: (loading: boolean) => set({ loading }),
    setLoadingMore: (loadingMore: boolean) => set({ loadingMore }),
    setPage: (page: number) => set({ page })
}))

export const useUsersListStore = create<UsersListState>()(
    persist(
      (set) => ({
        firstUsers: [],
        setFirstUsers: (users: IUserInterface[]) => set({ firstUsers: users }),
        userSeed: '',
        setUserSeed: (seed: string) => set({ userSeed: seed }),
      }),
      {
        name: 'first-users-storage',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  );
  