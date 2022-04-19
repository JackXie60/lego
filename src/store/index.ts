import { createStore } from "vuex";
import templates, { TemplatesProps } from "./templates";
import user, { UserDataProps } from "./user"

export interface GlobalDataProps {
  user: UserDataProps;
  templates: TemplatesProps;
}

const store = createStore({
    modules: {
      templates,
      user
    }
});

export default store
