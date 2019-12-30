import LabelInput from './LabelInput'

const components = {
	LabelInput
}

const install = (Vue) => {
  Object.keys(components).map((key) => {
    const component = components[key]
    Vue.component(component.name, component)
  })

//  Vue.prototype.$message = Message
//  Vue.prototype.$notice = Notice
//  Vue.prototype.$create = create
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const Relax = {
  install
}

Object.keys(components).map((key) => {
  const component = components[key]
  Relax[component.name] = component
})

export default Relax