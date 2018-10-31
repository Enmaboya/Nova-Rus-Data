Nova.booting((Vue, router) => {
    Vue.component('index-russian-date', require('./components/Index/RussianDateField'));
    Vue.component('detail-russian-date', require('./components/Detail/RussianDateField'));
    Vue.component('form-russian-date', require('./components/Form/RussianDateField'));
})
