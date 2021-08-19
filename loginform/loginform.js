const app=Vue.createApp({
data(){
    return {
        email:'',
        password:'',
        gender:'',
        country:'',
        technology:'',
        name:''
    }
},
methods:{
    login(){
        alert("Hello " +this.name + "are you sure to submit"),
        this.email='';
        this.name='';
        this.password='';
        this.gender='';
        this.technology='';
        this.country='';
        
    }
}
});
app.mount("#forms");