import config from '../../../config.json';

const bio = async (args: string[]): Promise<string> => {
  const Terminal = '\u{f120}';
  const Person = '\u{f007}';
  const CV = '\u{f02d}';
  const At = '\u{40}';
  const EmailLetter = '<span>\u{f0e0}</span>';
  const GitHub = '<span>\u{f09b}</span>';
  const Telegram = '<span>\u{f2c6}</span>';
  const VK = '<span>\u{f189}</span>';
return (`
<style>
tr:hover {background-color: #005266;}
</style>
<table>
  <tr style="border-bottom: 1px dotted;">
    <td>${Terminal}</td>
    <td> ABOUT ME</td>
  </tr>
  <tr>
    <td>${Person}</td>
    <td> ${config.name}</td>
  </tr>
  <tr>
    <td>${CV}</td>
    <td> <u><a href="${config.cv_url}" target="_blank">CV</a></u></td>
  </tr>
</table>
<p>
⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠟⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢷⡄⠈⡓⠢⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⣀⣠⠤⠂⢹
⠈⡷⡄⠈⠲⢤⣈⠻⠉⠛⠉⠉⠁⠒⠖⠉⠉⠉⠒⠶⢦⣤⠴⠒⢉⣡⠴⢀⠏
⠀⢸⡿⡂⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣴⡞⠉⠀⢀⣠⡞⠀
⠀⠀⢙⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⢠⡼⡟⠀⠀
⠀⠀⡼⠋⠀⣤⣀⠀⠀⠀⠀⠀⠈⠐⣂⣄⠀⠀⠀⠀⠀⠀⠀⢀⠀⣰⡟⠁⠀⠀
⠀⢠⡇⠀⠀⠘⠛⠃⠀⠀⠀⠀⠾⣿⠿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀
⠀⢸⡇⢺⡀⠀⢠⡒⠠⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡀⠀⠀⠸⡇⠀⠀⠀
⠀⢸⡇⣘⠑⡀⠀⠙⢏⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠂⠀⣔⣇⠀⠀⠀
⠀⢸⡇⡁⠀⢳⣶⣾⣷⣦⣄⣀⡀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀
⠀⠸⡇⠁⠀⠀⢏⠉⠀⠀⠙⠛⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⡏⠀⠀⠀
⠀⠀⠯⣀⣈⣀⣈⣐⣲⣄⣄⣤⣴⣆⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣈⣛⡧⠀⠀⠀
</p>


<table>
  <tr style="border-bottom: 1px dotted;">
    <td>${At}</td>
    <td> CONTACTS</td>
  </tr>
  <tr>
    <td>${EmailLetter}</td>
    <td> <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u></td>
  </tr>
  <tr>
    <td>${GitHub}</td>
    <td> <u><a href="https://github.com/${config.social.github}" target="_blank">${config.social.github}</a></u></td>
  </tr>
  <tr>
    <td>${Telegram}</td>
    <td> <u><a href="https://t.me/${config.social.telegram}" target="_blank">${config.social.telegram}</a></u> ${`<=== Please, use this one!`}</td>
  </tr>
  <tr>
    <td>${VK}</td>
    <td> <u><a href="${config.vk_url}" target="_blank">${config.social.vk}</a></u></td>
  </tr>
</table>
`);

};

export default bio;