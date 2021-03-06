import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceleratorComponent  } from "src/app/accelerator/accelerator.component";
import { UserComponent  } from "src/app/user/user.component";
import { AcclKubeComponent  } from "src/app/accl-kube/accl-kube.component";
import { AcclOpenshiftComponent } from "src/app/accl-openshift/accl-openshift.component";
import { AcclJenkinsComponent } from "src/app/accl-jenkins/accl-jenkins.component";
const routes: Routes = [
	{
		path:'',component:UserComponent
	},
	{
		path:'accelerator',component:AcceleratorComponent 
	},
	{
		path:'acclkube',component:AcclKubeComponent
	},
	{
		path:'acclopenshift',component:AcclOpenshiftComponent
	},
         {
                path:'accljenkins',component:AcclJenkinsComponent
        }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
