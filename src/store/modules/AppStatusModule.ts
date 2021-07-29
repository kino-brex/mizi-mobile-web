import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from '@/store';

export interface IAppStatus {
    showUIBlocker: boolean;
    isSignIn: boolean;
}
@Module({dynamic: true, store, name: 'app-status'})
class AppStatus extends VuexModule implements IAppStatus {
    showUIBlocker = false;
    isSignIn = false;
    @Mutation
    private SET_IS_SIGN_IN(val: boolean) {
        this.isSignIn = val;
    }

    @Action
    public SetIsSignIn(val: boolean) {
        this.SET_IS_SIGN_IN(val);
    }
}

export const AppStatusModule = getModule(AppStatus);
