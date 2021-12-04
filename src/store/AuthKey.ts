import { InjectionKey } from "@vue/composition-api";
import { AuthStore } from "@/store/AuthStore";

const AuthKey: InjectionKey<AuthStore> = Symbol("AuthStore");

export default AuthKey;
