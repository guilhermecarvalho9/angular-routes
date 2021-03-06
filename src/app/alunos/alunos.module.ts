import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AuthGuard } from '../guards/auth.guard';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AlunosRoutingModule,
    MatCardModule
  ],
  providers: [
    AlunosService,
  ]
})
export class AlunosModule {
}