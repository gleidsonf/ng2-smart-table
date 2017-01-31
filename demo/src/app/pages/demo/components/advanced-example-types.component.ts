import { Component } from '@angular/core';

@Component({
  selector: 'advanced-example-types',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class AdvancedExamplesTypesComponent {

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      comments: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      comments: "Vix iudico graecis in? Malis eirmod consectetuer duo ut? Mel an aeterno vivendum accusata, qui ne amet stet definitiones."
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      comments: "Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae."
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      comments: "Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      comments: "Quo viris appellantur an, pro id eirmod oblique iuvaret, timeam omittam comprehensam ad eam? Eos id dico gubergren, cum dicant qualisque ea, id vim ferri moderatius?"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      comments: "Audire appareat sententiae qui no. Sed no rebum vitae quidam."
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      comments: "Mel dicat sanctus accusata ut! Eu sit choro vituperata, qui cu quod gubergren elaboraret, mollis vulputate ex cum!"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      comments: "Cu usu nostrum quaerendum, no eripuit sanctus democritum cum."
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      comments: "In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei."
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      comments: "Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id. Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      comments: "Lorem ipsum dolor sit amet, mea dolorum detraxit ea?"
    }
  ];

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name',
        type: 'completer',
        config: {
          completer: {
            data: this.data,
            searchFields: 'name',
            titleField: 'name',
            descriptionField: 'email'
          }
        }
      },
      username: {
        title: 'User Name',
        type: 'list',
        config: {
          list: [{ value: 'Antonette', title: 'Antonette' }, { value: 'Bret', title: 'Bret' }, {
            value: 'Samantha',
            title: 'Samantha'
          }]
        }
      },
      email: {
        title: 'Email'
      },
      comments: {
        title: 'Comments',
        type: 'textarea'
      }
    }
  };
}
