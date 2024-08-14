import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardValuesComponent } from '../../components/card-values/card-values.component';
import { EthicalValues } from '../../types/ethical-values.type';

@Component({
  selector: 'app-ethical-values',
  standalone: true,
  imports: [
    CommonModule,
    CardValuesComponent,
  ],
  templateUrl: './ethical-values.component.html',
  styleUrl: './ethical-values.component.scss'
})
export class EthicalValuesComponent {
  public values: EthicalValues[] = [
    { 
      url: "/assets/icons/value01.png",
      title: "Sim à vida desde a concepção",
      message: "Ao sermos a favor da vida desde a concepção, " +  
              "consequentemente somos contra o aborto, o suicídio, " +
              "a pena de morte e a eutanásia. " +
              "Apoiamos a doação de órgãos, assim como tudo o que soma " +
              "para o esplendor de viver. Diga sim à vida."
    },
    { 
      url: "/assets/icons/value02.png",
      title: "Cultura de paz",
      message: "É um conjunto de valores, atitudes, tradições, " +
              "comportamentos e estilos de vida baseados no respeito " +
              "à vida, ao fim da violência, à prática da não violência " +
              "por meio da educação, diálogo e cooperação."
    },
    { 
      url: "/assets/icons/values03.png",
      title: "ESPIRITUALIDADE DO SER",
      message: 'É um viver na fraternidade diante da infinitude ' +
              'espiritual da vida. Tem como base ' +
              'de reflexão o "conhece-te a ti mesmo" e ' + 
              'como postura de ação o "amar a Deus sobre ' + 
              'todas as coisas e ao próximo como a si mesmo".'
    },
  ]
}
