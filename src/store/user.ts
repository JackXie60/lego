import { Module } from "vuex";
import { GlobalDataProps } from ".";

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

export interface UserDataProps {
    data: UserProps;
}

const user: Module<UserDataProps, GlobalDataProps> = {
  state: {
    data: {
        isLogin: false,
        userName: "xiexu"
    }
  },
  mutations: {
    login(state) {
      state.data = { ...state.data, isLogin: true, userName: "xiexu" };
    },
    logout(state) {
      state.data = { isLogin: false };
    },
  },
};

export default user
