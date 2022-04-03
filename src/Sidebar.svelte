<script>
    import { createEventDispatcher } from "svelte";
    import {selectedMember} from "./store"
  import { fly } from "svelte/transition";
  export let menuDrawer;
  
  const handleMember = (member) => {
    selectedMember.set(member)
  }

  const dispatch = createEventDispatcher()

  const handleClick = () => {
    dispatch('addNew')      
  }
</script>

{#if menuDrawer}
  <div class="drawer" transition:fly={{ x: -500, duration: 1000 }}>
    
      <div class="close-btn" on:click>X</div>
    
    
    <div class="box">
      <li>All Tasks</li>
      <li>Completed Tasks</li>
      <li>Incompleted Tasks</li>
      <div class="separate"></div>
      
    </div>
    <div class="add" >
        <span on:click={handleClick} class="addBtn" >+</span>
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
    background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
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
  }
  
  .close-btn:hover {
    background-color: rgba(149, 155, 152,1);
  }
  .box {
    display: flex;
    padding-top: 40px;
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
      justify-content: center;
  }
  .addBtn{
    
      background-color: crimson;
      width: 35px;
      height: 35px;
      text-align: center;
      border-radius: 100%;
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
