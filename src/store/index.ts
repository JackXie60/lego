import { createStore } from "vuex";
import templates, { TemplatesProps } from "./templates";
import user, { UserDataProps } from "./user"
import editor, {EditorProps} from "./editor";

export interface GlobalDataProps {
  user: UserDataProps;
  templates: TemplatesProps;
  editor: EditorProps;
}

const store = createStore({
    modules: {
      templates,
      user,
      editor
    }
});

export default store
