const MI_SHOP = "mishop";
export default{
    //取整个localStorage数据
    getStorage(){
        return JSON.parse(window.localStorage.getItem(MI_SHOP));
    },
    //获取某个localStorage里的值
    getItem(key,module_name){
        let storageData = this.getStorage();
        if(module_name){
            let val = this.getItem(module_name);//利用递归方法
            // let val = storageData[module_name];
            return val[key];
        }
        return storageData[key];
    },
    //设置localStorage
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,val);
        }else{
            let storageData = this.getStorage();
            storageData[key] = value;
            window.localStorage.setItem(MI_SHOP,JSON.stringify(storageData));
        }
    },
    //清除
    clear(key, module_name){
        let val = this.getStorage();
        if (module_name){
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        window.localStorage.setItem(MI_SHOP, JSON.stringify(val));
    }
}