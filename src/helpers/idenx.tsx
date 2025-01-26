export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('en-AR',{
        style: 'currency', currency: 'ARS'
    }).format(quantity)
}
