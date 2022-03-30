let app = document.getElementById("app");

new Vue({
    el: '#app',
    data: {
        title: 'Gerador De QRCode',
        text: '',
        qrcode: new QRious({ size: 300 })
    },
    computed: {
        newQRCode() {
            this.qrcode.value = this.text
            return this.qrcode.toDataURL()
        }
    }
})