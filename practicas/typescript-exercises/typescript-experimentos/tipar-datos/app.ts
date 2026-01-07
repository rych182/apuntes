(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    enum fuerza {
      acuaman = 0,
      batman= 1,
      Flash=5,
      superman=100
    }


    const fuerzaFlash:fuerza = fuerza.Flash;
    const fuerzaSuperman:fuerza = fuerza.superman;
    const fuerzaBatman:fuerza = fuerza.batman;
    const fuerzaAcuaman:fuerza = fuerza.acuaman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo// CASTING
    const poder: any = '100';
    //Aquí hacemos el "casting"
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  