<template>
    <div class="container-fluid" id='wrap-admin-account'>
        <router-link to="/formA" class="router-link-create-listing">&#8249; Back To form</router-link>
        <div class="row justify-content-md-center">
            <!-- <div class="col-3"></div> -->
            <div class="col-xl-6 col-sm-8 col-xs-10 card" style="padding: 20px 50px;">
            <div class='row justify-content-md-center create-account-class'>
                <h2 v-if="routeParams"> Edit Account </h2>
                <h2 v-else > Create Account </h2>
            </div>

            <div class="row justify-content-md-center create-account-class">
                <span> * All fields required </span>
            </div>
            <form class="form-admin-account">
                <div class="body-admin-account">
                    <div class="admin-account">
                        <div class="data-section">
                            <div class="title-input-account">First Name</div>
                            <div role="group">
                                <b-form-input
                                v-model="users.first_name"
                                aria-describedby="input-live-help input-name-feedback"
                                :state="validationName"
                                trim
                                class="form-account"
                                placeholder="John"
                                name="name_admin_account"
                                @input="setData({name:'name_admin_account',
                                                value: users.first_name ? users.first_name : '' })"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-name-feedback">
                                    This is a required field
                                </b-form-invalid-feedback>
                            </div>
                        </div>
                        <div class="data-section">
                            <div class="title-input-account">Email</div>
                            <div role="group">
                                <b-form-input
                                v-model="users.email"
                                class="form-account"
                                type="email"
                                aria-describedby="input-live-help input-email-feedback"
                                :state="validationEmail"
                                trim
                                placeholder="example@mail.com"
                                style="padding: 20px 10px; border-color: #e8e8e8"
                                name="email_admin_account"
                                @input="setData({name:'email_admin_account',
                                                value:users.email ? users.email : ''})"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-email-feedback">
                                    A valid email is required
                                </b-form-invalid-feedback>
                            </div>
                        </div>
                    </div>
                    <div class="admin-account">
                        <div class="data-section">
                            <div class="title-input-account">Last Name </div>
                            <div role="group">
                                <b-form-input
                                v-model="users.last_name"
                                class="form-account"
                                aria-describedby="input-live-help input-last-name-feedback"
                                :state="validationLastName"
                                trim
                                placeholder="Doe"
                                name="last_name_admin_account"
                                @input="setData({name:'last_name_admin_account',
                                                value: users.last_name ? users.last_name : ''})"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-last-name-feedback">
                                    This is a required field
                                </b-form-invalid-feedback>
                            </div>
                        </div>
                        <div class="data-section">
                            <div class="title-input-account">Phone</div>
                            <div role="group">
                                <b-form-input
                                v-model="users.phone"
                                aria-describedby="input-live-help input-phone-feedback"
                                :state="validationPhone"
                                trim
                                class="form-account"
                                placeholder="XXX-XXX-XXXX"
                                name="phone_admin_account"
                                @input="setData({name:'phone_admin_account',
                                                value: users.phone ? users.phone : ''})"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-phone-feedback">
                                    This is a required field
                                </b-form-invalid-feedback>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
                <div class="row justify-content-md-center">
                    <button type="button" class="btn btn-submit-admin-account btn-primary" @click="requestAdminAccount()">Submit</button>
                </div>
            </div>
            <!-- <div class="col-3"></div> -->
        </div>
    </div>
</template>

<style>
#wrap-admin-account{
    margin-top:50px;
    margin-bottom: 50px;
    color: black;
}
.form-admin-account {
    display: flex;
    justify-content: space-around;
    margin-bottom: 0;
    margin-top: 20px;
}
span {
    color: darkgrey;
}
.body-admin-account {
    display: flex;
}
.admin-account {
    /* margin: auto; */
    margin: 5px 15px;
    margin-top: 5px;
}
.form-account {
    padding: 12px !important;
}
.title-input-account {
    margin-bottom: .5rem;
    color: black;
    margin: 20px 0 5px 0;
}
.btn-submit-admin-account {
    width: 250px;
    margin: 20px auto;
    display: block;
    height: 45px;
    border-radius: 0;
}
@media(max-width: 991px) {
    .body-admin-account {
        display: block;
    }
    #wrap-admin-account{
        margin-top: 20px;
        margin-bottom: 0;
    }
    .create-account-class {
        margin: 0 auto;
    }
}
</style>

<script>
// import { url } from '../services/config';
// import { userService } from 'services';
// import adminpanel from '../assets/css/adminpanel.css';

export default {
    data(){
        return {
            name_admin_account:undefined,
            email_admin_account:undefined,
            last_name_admin_account:undefined,
            phone_admin_account:undefined,
            validationName:null,
            validationLastName:null,
            validationPhone:null,
            validationEmail:null,
            selected:undefined,
            users:[
                { name: 'serhii1', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
                { name: 'serhii2', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
                { name: 'serhii3', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
                { name: 'serhii4', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
                { name: 'serhii5', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
                { name: 'serhii6', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
                { name: 'serhii7', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
            ]
        }
    },
    created() {
        if (!this.$store.getters.getMe.users) {
            this.$store.dispatch('GET_ME')
        }

        if ( !this.$store.getters.getusers.users )
            this.$store.dispatch('GET_users')
    },
    computed: {
        routeParams(){
            return this.$route.params.id
        }
    },
    methods: {
        setData(obj) {
            var name = /^[a-zA-ZА-Яа-я]{3,160}$/,
                ph = /^[0-9-]+$/,
                em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                pwd = /^[a-zA-Z0-9_\ ]{6,}$/;
            if (this.$route.params) {
                if ( obj.name === "name_admin_account" ) {
                    if ( name.test(obj.value) ) {
                    this.validationName = null;
                    } else {
                        this.validationName = false;
                    }
                }

                if ( obj.name === "last_name_admin_account" ) {
                    if ( name.test(obj.value) ) {
                    this.validationLastName = null;
                    } else {
                        this.validationLastName = false;
                    }
                }

                if ( obj.name === "email_admin_account" ) {
                    if ( em.test(obj.value) ) {
                    this.validationEmail = null;
                    } else {
                        this.validationEmail = false;
                    }
                }

                if ( obj.name === "phone_admin_account" ) {
                    if ( ph.test(obj.value) ) {
                        this.validationPhone = null;
                    } else {
                        this.validationPhone = false;
                    }
                }
            } else {
                if ( obj.name === "name_admin_account" ) {
                this.validationName = null;
                }
                if ( obj.name === "email_admin_account" ) {
                    this.validationEmail = null;
                }
                if ( obj.name === "last_name_admin_account" ) {
                    this.validationName = null;
                }
                if ( obj.name === "phone_admin_account" ) {
                    this.validationPhone = null;
                }

            }
        },
        validName() {
            var name = /^[a-zA-ZА-Яа-я]{3,160}$/;
            if ( this.name_admin_account == undefined )
                return false
            else
                return name.test(this.name_admin_account)
        },
        validLastName() {
            var name = /^[a-zA-ZА-Яа-я]{3,160}$/;
            if ( this.last_name_admin_account == undefined )
                return false
            else
                return name.test(this.last_name_admin_account)
        },
        validPhone(){
            var ph = /^[0-9-]+$/;
			return ph.test(this.phone_admin_account);
		},
		validEmail(){
			var em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return em.test(this.email_admin_account);
        },
        requestAdminAccount(){
            var usersId = this.$store.getters.getusers.filter(admin => admin.id == this.$route.params.id),
                companyIdMe = this.$store.getters.getMe.company_id;

            if (usersId.length == "1") {
                    this.validationSelect = null;
                    // this.$store.dispatch('EDIT_ADMINACCOUNT');
                    var usersManager = this.$store.getters.getusers.filter(admin => admin.id == this.$route.params.id);

                    var data = {
                        id:usersManager[0].id,
                        email: usersManager[0].email,
                        first_name: usersManager[0].first_name,
                        last_name: usersManager[0].last_name,
                        phone: usersManager[0].phone,
                    }

                    userService.edit_adminAccount(
                        this, data)
                    .then(res => {
                        if( res.status == 200 ) {
                            this.$swal({
                                type: 'success',
                                title: 'Success!',
                                showConfirmButton: false,
                                showCancelButton: false,
                                html:
                                'A confirmation email has been sent to ' +usersManager[0].email +
                                '<hr>' +
                                '<a href="/users">Back to Admin Management &#8250;</a>'
                            })
                        }else{
                            this.$swal({
                                type: 'error',
                                title: 'Please try again later. Server Error!'
                            })
                        }
                    })
            } else {
                var usersManager = this.$store.getters.getusers;
                if ( ((this.users.first_name == []) || ( this.validationName == false ) ) || ((this.users.last_name == []) || ( this.validationLastName == false )) || ((this.users.phone == []) || ( this.validationPhone == false ) ) || ((this.users.email == []) || ( this.validationClientName == false ) ) || (this.users.password == undefined) || ( this.users.password != this.pwd2_admin_account )) {

                    if( this.users.first_name == undefined ) {
                        this.validationName = false;
                    }

                    if( this.users.last_name == undefined ) {
                        this.validationLastName = false;
                    }

                    if( this.users.phone == undefined ) {
                        this.validationPhone = false;
                    }

                    if( this.users.email == undefined ){
                        this.validationEmail = false;
                    }
                } else {
                    var data = {
                        email: this.users.email,
                        first_name: this.users.first_name,
                        last_name: this.users.last_name,
                        phone: this.users.phone
                    }
                    userService.save_adminAccount(
                        this, data)
                    .then(res => {
                        if( res.status == 200 ) {
                            this.$swal({
                                type: 'success',
                                title: 'Success!',
                                showConfirmButton: false,
                                showCancelButton: false,
                                html:
                                'A confirmation email has been sent to ' + this.email_admin_account +
                                '<hr>' +
                                '<a href="/users">Back to Admin Management &#8250;</a>'
                            })
                        }else if (res.status == 400) {
                            this.$swal({
                                type: 'error',
                                title: 'This email is already exists'
                            })
                        }else{
                            this.$swal({
                                type: 'error',
                                title: 'Please try again later. Server Error!'
                            })
                        }
                    })
                }
            }
        }
    }
}
</script>
