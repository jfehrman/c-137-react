const determineVariant = (variant: string = 'default') => {
  switch (variant) {
    case 'success':
      return '--success';
    case 'warning':
      return '--warning';
    case 'danger':
      return '--danger';
    case 'attention':
      return '--attention';
    default:
      return '';
  }
}

export default determineVariant;
