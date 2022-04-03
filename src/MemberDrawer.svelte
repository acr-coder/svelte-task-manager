<script>
    import { allTasks, members } from "./store";
    import { fly } from "svelte/transition";
    import { createEventDispatcher } from "svelte"
  
    const dispatch = createEventDispatcher();
    export let taskDrawer;
    export let memberDrawer;
  
    let member;
    
    let valid = false;
    let errors = { member: ""};
    
  
    const handleSubmit = () => {
      valid = true;
      if (member.trim().length < 5) {
        valid = false;
        errors.member = "Member name must be at least 5 characters";
      } else {
        errors.member = "";
      }
      
      
  
      if (valid) {
        let newMember = member;
        console.log(newMember);
        members.update(currentMembers => {
          return [...currentMembers,newMember]
        })
        member='';
        
  
        dispatch('memberAdded')
      }
  
      
    };
  </script>
  
  {#if memberDrawer}
    <div class="drawer" transition:fly={{ x: 200, duration: 1000 }}>
      <div class="close-btn" on:click>X</div>
      <div class="box">
        <h3>Add Member</h3>
        <form on:submit|preventDefault={handleSubmit}>
          <input 
          bind:value={member} on:input={()=>errors.member = ''}
          type="text" placeholder="task..." />
          <span class="error" >{errors.member}</span>
          
  
          <button  type="submit" >Submit Member</button>
        </form>
      </div>
    </div>
  {/if}
  
  <style>
    .drawer {
      position: absolute;
      top: 0;
      right: 0;
      box-sizing: border-box;
      padding: 0;
      width: 40%;
      height: 100vh;
  
      background: rgb(238, 174, 202);
      background: radial-gradient(
        circle,
        rgba(238, 174, 202, 1) 0%,
        rgba(148, 187, 233, 1) 100%
      );
    }
  
    .close-btn {
      margin-left: 10px;
      width: 25px;
          height: 25px;
          border-radius: 100%;
          background-color: rgba(149, 155, 152,0);
          text-align: center;
          color: rgb(0, 0, 0);
          cursor: pointer;
    }
    .close-btn:hover {
      background-color: rgba(149, 155, 152,1);;
    }
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    
    form {
      width: 80%;
      display: flex;
      flex-direction: column;
    }
    form > input,
    textarea,
    select {
      border-radius: 5px;
      outline: none;
    }
    
    form > button {
      border-radius: 5px;
      background-color: crimson;
      color: #fff;
      width: 70%;
      margin: auto;
      cursor: pointer;
    }
    .error{
      color: red;
      font-size: 13px;
    }
    
    @media screen and (max-width: 600px) {
      .drawer {
        width: 100%;
      }
      form {
        width: 90%;
      }
      .box {
        padding-top: 75px;
      }
    }
  </style>
  