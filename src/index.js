function checkHealth({ name, health }) {
  if (health > 50) {
    return 'healthy';
  } else if (15 <= health <= 50) {
    return 'wounded';
  } else if (0 <= health < 15) {
    return 'critical';
  }
}
