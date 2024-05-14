import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

const allGloablComponents = { SvgIcon ,Pagination}

export default {
    install(app) {

        Object.keys(allGloablComponents).forEach(key => {

            app.component(key, allGloablComponents[key])

        });

    }
}

