import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];
  pagina: number = 0;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina']
      }
    );
  }

  proximaPagina() {
    // this.pagina++;
    this.router.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}})
  }

}
