<script>
    import { createEventDispatcher } from "svelte";
    import {selectedMember,members} from "./store"
  import { fly } from "svelte/transition";
  export let menuDrawer;
  
  
  const dispatch = createEventDispatcher()

  const handleClick = () => {
    dispatch('addNewTask')      
  }
  const handleClickMember = () => {
    dispatch('addNewMember')      
  }
</script>

{#if menuDrawer}
  <div class="drawer" transition:fly={{ x: -500, duration: 1000 }}>
    
      <div class="close-btn" on:click>X</div>
    
    
    <div class="box">
      <li>All Tasks</li>
      <li>Completed Tasks</li>
      <li>Incompleted Tasks</li>
      <div class="separate" ></div>
      <div class="members" >

      
      {#each $members as member (member) }
        <li>{member}</li>
      {/each}
    </div>
      
    </div>
    <div class="add" >
        <span on:click={handleClick} class="addBtn" >+Task</span>
        <span on:click={handleClickMember} class="addBtn" >+Member</span>
    </div>
    
  </div>
{/if}

<style>
  .drawer {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 20px;
    width: 20%;
    height: 100vh;
    z-index: 999;
    background: rgb(192, 20, 94);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgb(36, 107, 189) 100%);
  }

  .close-btn {
    position: absolute;
    right: 10px;
    width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: rgba(149, 155, 152,0);
        text-align: center;
        color: rgb(0, 0, 0);
        cursor: pointer;
        z-index: 500;
  }
  
  .close-btn:hover {
    background-color: rgba(149, 155, 152,1);
  }
  .box {
    display: flex;
    padding-top: 1px;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  li {
    list-style: none;
    margin-bottom: 10px;
    color: azure;
    opacity: 0.7;
    cursor: pointer;
  }
  li:hover {
    opacity: 1;
  }
  .add{
      display: flex;
      justify-content: space-between;
  }
  .addBtn{
    
      background-color: crimson;
      width: 65px;
      height: 35px;
      font-size: 13px;
      text-align: center;
      border-radius: 10%;
      line-height: 30px;
      color: #fff;
      cursor: pointer;
      opacity: 0.8;   
      
  }
  .addBtn:hover{
    opacity: 1;
  }
  .separate{
        width: 100%;
        height: 5px;
        background-color: rgb(226, 163, 81);
        margin: auto;
    }
    .members{
     display: flex;
     flex-direction: column;
     padding: 5px;
      }
      .members >li{
        margin-left: 5px;
      }
  @media screen and (max-width: 600px) {
    .drawer {
      width: 100%;
      height: 100vh;
      padding-top: 100px;
    }

    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
      padding-top: 0;
    }
    li {
      font-size: 26px;
    }
  }
</style>
