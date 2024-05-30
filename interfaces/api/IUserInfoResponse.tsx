import IUserInterface from "../IUserInterface"

export default interface IUserInfoResponse {
    results: Array<IUserInterface>
    info: Info
}

export interface Info {
    seed: string
    results: number
    page: number
    version: string
  }