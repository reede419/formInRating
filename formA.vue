<template>
    <div class="row customView">
        <div class="col-xl-6 col-xs-8">
            <div class="adminAdding" v-if="totalRows">
                <h1>
                    Form
                </h1>
                <div>
                    <button class="btnPlus">    
                        <router-link to="/users/create">
                            <font-awesome-icon icon="plus" class="adminPlus"/>
                        </router-link>
                    </button>
                </div>    
            </div>
            <div>
                <b-table 
                    striped 
                    hover 
                    :items="users"
                    :fields="fields" 
                    :current-page="currentPage"
                    :per-page="perPage"
                >
                    <template v-slot:cell(name)="data">
                        {{data.item.name}} {{data.item.last_name}}
                    </template>
                    <template v-slot:cell(active)="data">
                        <div class="buttonWrap">
                            <button class="btnAction" @click="editAdmin(data.item.id, $event)">
                                <router-link to="edit_users">
                                    edit
                                </router-link>
                            </button>
                            <button class="btnAction" @click="deleteAdmin(data.item, $event)">
                                <font-awesome-icon icon="times-circle"/>
                            </button>
                        </div>
                    </template>
                </b-table>
                    <b-row align-h="between"  align-self="end">
                        <b-col sm="7" md="4" class="my-1">
                        <b-pagination
                            v-model="currentPage"
                            :total-rows="totalRows"
                            :per-page="perPage"
                            align="fill"
                            size="sm"
                            class="my-0"
                        ></b-pagination>
                        </b-col>
                    </b-row>
            </div>      
        </div>
    </div>
</template>
<script>

export default {
    data() {
      return {
        fields:[
            {
                label:'',
                key:'name'
            },
            {
                label:'',
                key:'surname'
            },
            {
                label:'',
                key:'tel'
            },
            {
                label:'',
                key:'email'
            },
            {
                label:'',
                key:'action'
            },
            {
                key: 'active',
                sortable: false,
                thClass: 'hidden'
            }
        ],
        users:[
            { name: 'serhii1', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
            { name: 'serhii2', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
            { name: 'serhii3', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
            { name: 'serhii4', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
            { name: 'serhii5', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
            { name: 'serhii6', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
            { name: 'serhii7', surname: 'klepach', tel: '123456789', email: 'test@gmail.com'},
        ],
        currentPage: 1,
        perPage: 9,
        adminRequest: undefined
      }
    },
    created() {
            if ( !this.$store.getters.getusers.users )
                this.$store.dispatch('GET_users')

    },
    computed:{
        totalRows(){
            return this.users && this.users.length 
        }
    },
    // methods: {
    //     editAdmin(id, event) {
    //         var adress_url = '/formEdit';
    //         return this.$router.push('/formEdit')
    //     },
    //     deleteAdmin(item, event) {
    //         var id = item.id; 
    //             this.$swal({
    //                 type: 'warning',
    //                 title: 'Are you sure you want to delete a '+ item.first_name,
    //                 showCancelButton: true,
    //                 cancelButtonText:'Cancel >',
    //                 confirmButtonText:'Delete'
    //             }).then((res) => {
    //                 if (res.value){
    //                     userService.delete_adminAccount(this, { 'id':id })
    //                     .then((res) => { 
    //                         if ( res.status == 204 ) {
    //                 // console.log(res, 'ersss')
    //                 // console.log(res.value, 'resvalue')
    //                         this.$swal({
    //                             type: 'success',
    //                             title: 'Success',
    //                             showConfirmButton: false,
    //                             showCancelButton: false,
    //                             html:
    //                             'The user has been deleted.'+
    //                             '<hr>'+
    //                             '<a href="/users">Back to Admin Management &#8250; </a>'
    //                             })
    //                         } else if ( res.status == 211 ) {
    //                             this.$swal({
    //                                 type: 'error',
    //                                 title: 'You cannot delete this user!'
    //                             })
    //                         } else {
    //                             this.$swal({
    //                                 type: 'error',
    //                                 title: 'Please try again later. Server Error!'
    //                             })
    //                         } 
    //                 })
    //             }
    //         })

    //     }
    // }
  }
</script>
<style>
.customView {
    display: flex;
    justify-content: center;
}
.adminAdding {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}
.adminPlus {
    font-size: 32px;
    font-weight: 100 !important;
}
.btnPlus {
    background-color: unset;
}
.buttonWrap {
    display: flex;
    justify-content: flex-end;
}
.btnAction {
    background: none;
    width: auto;
    border: none;
}
.fa-edit {
    color: black;
}
@media(max-width: 500px) {
    .adminAdding {
        margin-top: 20px;
    }
}
</style>