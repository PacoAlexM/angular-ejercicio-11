import { User } from '@interfaces/req-response.interface';

export interface State {
    users: User[],
    loading: boolean,
}
