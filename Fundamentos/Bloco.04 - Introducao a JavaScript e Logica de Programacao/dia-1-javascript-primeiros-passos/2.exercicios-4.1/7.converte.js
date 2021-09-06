let notaPorcent;

notaPorcent = 90;


if (notaPorcent < 0 || notaPorcent > 100) {
    return "Erro! Notas devem ser maiores que 0 e menores que 100.";
} else if (notaPorcent >= 90 && notaPorcent < 100) {
  return "A";
} else if (notaPorcent >= 80 && notaPorcent < 90) {
  return "B";
} else if (notaPorcent >= 70 && notaPorcent < 80) {
  return "C";
} else if (notaPorcent >= 60 && notaPorcent < 70) {
  return "D";
} else if (notaPorcent >= 50 && notaPorcent < 60) {
  return "E";
} else if (notaPorcent < 50) {
  return "F";
}