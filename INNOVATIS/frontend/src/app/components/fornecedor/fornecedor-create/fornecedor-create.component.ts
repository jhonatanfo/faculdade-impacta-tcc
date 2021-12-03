import { fornecedor } from './../fornecedor.model';
import { fornecedorService } from './../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class fornecedorCreateComponent implements OnInit {

  fornecedor: fornecedor = {
    name: '',
    cnpj: null
  }

  constructor(private fornecedorService: fornecedorService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createfornecedor(): void {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Criado!')
      this.router.navigate(['/fornecedors'])
    })

  }

  cancel(): void {
    this.router.navigate(['/fornecedors'])
  }
}
