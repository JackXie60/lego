import { Module } from "vuex";
import { GlobalDataProps } from ".";
import {v4 as uuidv4} from "uuid"

export interface EditorProps {
    components: ComponentData[];
    currentElement: string;
}

export interface ComponentData {
    id: string;
    props: {[key: string]: any};
    name: string;
}

const testData: ComponentData[] = [
    {id: uuidv4(), name: 'l-text', props: {text: 'hello', color: "red", lineHeight: '1', textAlign: 'left', fontFamily: '', fontSize: "30px"}},
    {id: uuidv4(), name: 'l-text', props: {text: 'hello1', fontWeight: "bold", lineHeight: '2', textAlign: 'center', fontFamily: ''}},
    {id: uuidv4(), name: 'l-text', props: {text: 'hello2', fontSize: "20px", actionType:"url", url: "http://www.baidu.com"}},
]

const editor: Module<EditorProps, GlobalDataProps> = {
    state: {
        components: testData,
        currentElement: ""
    },
    mutations: {
        addComponent(state, props) {
            const newComponent = {
                id: uuidv4(),
                name: 'l-text',
                props,
            }
            state.components.push(newComponent)
        },
        setActive(state, id) {
            state.currentElement = id
        },
        updateComponent(state, {key, value}) {
            const updateElement = state.components.find(compoennt => compoennt.id === state.currentElement);
            if(updateElement) {
                updateElement.props[key] = value
            }
        }
    },
    getters: {
        currentElement(state) {
            return state.components.find(compoennt => compoennt.id === state.currentElement)
        }
    }
}

export default editor