import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user';
import type { loginForm ,loginResponseData} from '@/api/user/type';
import type {UserState} from './types/type.ts'
import { SET_TOKEN,GET_TOKEN } from '@/utils/token.ts';

let useUserStore = defineStore('User', {
    state: ():UserState => {
        return { token: GET_TOKEN() }
    },
    actions: {
        async userLogin(data: loginForm) {
            let result: loginResponseData = await reqLogin(data);

            if (result.code == 200) {
                this.token = (result.data.token as string)
                SET_TOKEN((result.data.token as string));

                return 'ok';
            } else {
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    getters: {}
})

export default useUserStore;