<script>
import DashBoard from "./DashBoard.svelte";
import AllTasks from "./AllTasks.svelte"
    import Drawer from  "./Drawer.svelte"
import Sidebar from "./Sidebar.svelte";
import MemberDrawer from "./MemberDrawer.svelte";
    

    let taskDrawer = false;
    let menuDrawer = false;
    let memberDrawer = false

    const toogleTaskDrawer = ()=> {
        taskDrawer = !taskDrawer
        menuDrawer = false
    }
    const toogleMenuDrawer = ()=> {
        menuDrawer = !menuDrawer
    }
    const toogleMemberDrawer = () => {
        memberDrawer = !memberDrawer
        menuDrawer=false
        taskDrawer=false
    }
    
</script>

<main class:pageOpac={taskDrawer} >
    
    <span 
    on:click={toogleMenuDrawer}
    class:lost-btn={menuDrawer} 
    class="menu-btn" >
<div></div>
<div></div>
<div></div>
</span>
<DashBoard {menuDrawer} />
<Drawer {taskDrawer} on:click={toogleTaskDrawer} on:taskAdded={toogleTaskDrawer}  />
<Sidebar on:addNewTask={toogleTaskDrawer} on:addNewMember={toogleMemberDrawer} {menuDrawer} on:click={toogleMenuDrawer}  />
<MemberDrawer {memberDrawer} on:memberAdded={toogleMemberDrawer} on:click={toogleMemberDrawer} />
<AllTasks {taskDrawer} {menuDrawer} {memberDrawer}/>
</main>

<style>
    main{
        height: 100vh;
        background: rgb(175,174,238);
    }
    .pageOpac{
        background-color: rgba(148, 136, 136, 0.5);
    }
    .lost-btn{
        visibility: hidden;
    }
    .menu-btn{
        position: absolute;
        top: 20px;
        left: 20px;
        
    
    
    width: 35px;
    height: 35px;
    text-align: center;
    border-radius: 100%;
    line-height: 30px;
    color: #fff;
    cursor: pointer;
    opacity: 0.8;   
    


    }
    .menu-btn > div{
        width: 35px;
  height: 5px;
  background-color: crimson;
  box-shadow: 2px 2px 2px 2px rgba(247, 244, 244, 0.5);
  margin: 6px 0;
    }
    
</style>