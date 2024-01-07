import config from '../../../config.json';
import * as bin from './index';
// List of commands that do not require API calls

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'bio' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 

More about me:
'bio' - short summary.
'cv' - my latest cv`
};

export const cv = async (args: string[]): Promise<string> => {
  window.open(`${config.cv_url}`);
  return 'Opening cv'
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const telegram = async (args: string[]): Promise<string> => {
  window.open(`https://t.me/${config.social.telegram}/`);

  return 'Opening telegram...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `total 161496
-rw-r--r--    1 visitor         visitor     999999999999999    Apr 14  1922 1_picture_of_your_mom.jpg
-rw-r--r--    1 visitor         visitor     11                 Apr 14  2022 ill_kill_this_guy_for_this_joke.txt
-rw-r--r--    1 visitor         visitor     842                Apr 14  2023 my_passwords.txt
`;
};

export const cat = async (args: string[]): Promise<string> => {
  if (args[0] === "my_passwords.txt") {
  return `GitHub: Y0uH@dN0Ch@nc3)00))0))00
VK: N0OfF3nc3Pl3@$3
Telegram: 1t$Ju$T@J0k3
`;}
};

export const cd = async (args: string[]): Promise<string> => {
  return `You have been isolated. There's no way to go. `;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ██████   ██████ █████████ ███████████ ██████████                                                    
  ░░██████ ██████ ███░░░░░██░░███░░░░░██░░███░░░░███                                                   
   ░███░█████░███░███    ░░░ ░███    ░███░███   ░░███                                                  
   ░███░░███ ░███░░█████████ ░██████████ ░███    ░███                                                  
   ░███ ░░░  ░███ ░░░░░░░░███░███░░░░░░  ░███    ░███                                                  
   ░███      ░███ ███    ░███░███        ░███    ███                                                   
   █████     ████░░█████████ █████       ██████████                                                    
  ░░░░░     ░░░░░ ░░░░░░░░░ ░░░░░       ░░░░░░░░░░                                                     
   ██████████████████████████████████████████████████                                                    
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                                                             
  Memes             ShitPosting          Development

Type 'help' to see the list of available commands.
Type 'bio' to display summary.
`;
};


                                   