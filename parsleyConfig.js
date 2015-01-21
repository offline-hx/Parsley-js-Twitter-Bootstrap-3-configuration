//统一配置，按需加载，不同配置的页面加载不同的配置
window.ParsleyConfig = {
    errorClass: 'has-error',
    successClass: 'has-success',
    classHandler: function(ParsleyField) {
        return ParsleyField.$element.parents('.form-group');
    },
    errorsContainer: function(ParsleyField) {
        return ParsleyField.$element.parents('.form-group');
    },
    errorsWrapper: '<span class="help-block">',
    errorTemplate: '<div></div>'
};

//统一配置，不同页面书写自己的配置
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.errorClass=!window.ParsleyConfig.errorClass ? 'has-error' : window.ParsleyConfig.errorClass;
window.ParsleyConfig.successClass=!window.ParsleyConfig.successClass ? 'has-success' : window.ParsleyConfig.successClass;
window.ParsleyConfig.classHandler = !window.ParsleyConfig.classHandler ? function (ParsleyField) {
    return ParsleyField.$element.parents('.form-group');
} : window.ParsleyConfig.classHandler;
window.ParsleyConfig.errorsContainer = !window.ParsleyConfig.errorsContainer ? function (ParsleyField) {
    return ParsleyField.$element.parents('.form-group');
} : window.ParsleyConfig.errorsContainer;
window.ParsleyConfig.errorsWrapper=!window.ParsleyConfig.errorsWrapper ? '<span class="help-block">' : window.ParsleyConfig.errorsWrapper;
window.ParsleyConfig.errorTemplate=!window.ParsleyConfig.errorTemplate ? '<div></div>' : window.ParsleyConfig.errorTemplate;
