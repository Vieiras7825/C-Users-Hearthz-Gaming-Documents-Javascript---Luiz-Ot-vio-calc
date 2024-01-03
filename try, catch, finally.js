function retornaHora(data) {
  if (!(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('1970-01-01T12:58:12');
  const hora = retornaHora(data);
  console.log(hora);
} catch(e) {
  // Tratar erro
  // console.log(e)
} finally {
  console.log('Tenha um bom dia.');
}
