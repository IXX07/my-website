import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/layout.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.default.scss', './program.mobile.scss']
})
export class ProgramComponent implements OnInit {

  programs = {
    'Conquest Of The Universe': {  
      details1: [
        'Typ=Unity',
        'Installation=ZIP-Datei',
        'Download-Größe=47,867MB'
      ],
      details2: [
        'Version=1.0',
        'Sprache=Deutsch',
        'Programmiersprache=C#'
      ],
      file: 'conquest-of-the-universe.zip',
      downloadName: 'Conquest Of The Universe.zip',
      description: `"Conquest of the Universe" ist ein Shooter, indem man auf Ufos schießt, wobei man Asteroiden und schwarzen Löchern ausweichen muss.
        Ziel ist es ein ganzes Sonnensystem zurückzuerobern, indem man sämtliche Aliens und deren Ufos zerstört.
        Kills, Zeit und gesammelte Materie werden gezählt damit man in jedem der vielen unterschiedlich schweren Levels Rekorde brechen kann.`
    },
    'VTubeMua': {
      details1: [
        'Type=Windows Forms',
        'Installation=Setup Wizard',
        'Download-Größe=1,72MB'
      ],
      details2: [
        'Version=1.0',
        'Sprache=Englisch',
        'Programmiersprache=C#'
      ],
      file: 'vtubemua.msi',
      downloadName: 'VTubeMua.msi',
      repository: 'https://github.com/IXX07/VTubeMua.git',
      description: `VTubeMua ist eine einfache VTube App für Videos oder Live-Streams. 
        Die vier verschiedenen Frames, die je nach Eingabelautstärke des ausgewählten Audioeingabegerätes variieren, können auch geändert werden,
        damit man seinen eigen Chrakter ins Leben rufen kann. Auch PixelArt wird hierbei unterstützt, weil kleine Grafiken scharf und groß gerendert werden.`
    },
    'Mualuenie': {
      details1: [
        'Typ=Discord Bot',
        'Version=1.0'
      ],
      details2: [
        'Sprache=Deutsch',
        'Programmiersprache=Python'
      ],
      link: 'https://discord.com/oauth2/authorize?client_id=1060565147292274768&permissions=412317334592&scope=bot',
      repl: 'https://replit.com/@MuaEnt/DiscordMua',
      description: `Mualuenie ist ein lustiger Discord Bot der lustige und bekannte Zitat per Zufall irgendwelchen populären Personen zuordnet.`
    }
  };

  @Input() name;
  p;

  get codeBtnName(): string {
    if (this.p['repository']) {
      return 'Repository';
    } else if (this.p['repl']) {
      return 'Repl';
    } else {
      return 'kein Code';
    }
  }

  get repBtnClassName(): string {
    if (this.p['repository'] || this.p['repl']) {
      return  '';
    } else {
      return 'disabled';
    }
  }

  get detailClassName(): string {
    return screen.width < 500 ? 'minimized': '';
  }

  constructor(public ls: LayoutService) { }

  ngOnInit(): void {
    this.p = this.programs[this.name];
  }

  open(x): void {
    if (x['link']) {
      open(x['link'], '_blank');
    } else {
      const a = document.createElement('a');
      a.href = '../../../assets/apps/' + x['file'];
      a.download = x.downloadName;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  openRep() {
    try {
      open(this.p['repository'] ?? this.p['repl'], '_blank');
    } catch { }
  }
}
