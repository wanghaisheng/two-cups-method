// 语言切换组件
function createLanguageSwitch(elementId, languages) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // 不强制设置绝对定位，保留元素原有的类名并添加z-index
    if (!element.className.includes('z-')) {
        element.className += " z-20";
    }
    
    // 创建语言选择器
    const langSelect = document.createElement('select');
    langSelect.className = "bg-white bg-opacity-20 text-white rounded-full px-3 py-1";
    langSelect.onchange = function() {
        switchLanguage(this.value);
    };
    
    // 添加语言选项
    for (const lang in languages) {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = languages[lang];
        option.selected = lang === currentLang;
        langSelect.appendChild(option);
    }
    
    element.appendChild(langSelect);
}

// 使用方法
// 在HTML中添加: <div id="language-switch"></div>
// 在脚本加载后调用:
// createLanguageSwitch('language-switch', {"zh-CN": "中文", "en-US": "English"});


