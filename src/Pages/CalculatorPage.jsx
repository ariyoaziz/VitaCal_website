// src/pages/CalculatorPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Pastikan Link diimpor karena digunakan
import { FaCalculator, FaWeight, FaRulerVertical, FaBirthdayCake, FaMale, FaFemale, FaRunning, FaDumbbell, FaChartLine, FaCheckCircle, FaExclamationCircle, FaHandPointRight, FaBalanceScale } from 'react-icons/fa'; // Import semua ikon yang digunakan

function CalculatorPage() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [activityLevel, setActivityLevel] = useState('sedentary');
    const [calories, setCalories] = useState(null);
    const [bmr, setBmr] = useState(null);
    const [bmi, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState('');
    const [error, setError] = useState('');

    const calculateBMR = () => {
        let calculatedBMR;
        if (gender === 'male') {
            calculatedBMR = (10 * parseFloat(weight)) + (6.25 * parseFloat(height)) - (5 * parseFloat(age)) + 5;
        } else { // female
            calculatedBMR = (10 * parseFloat(weight)) + (6.25 * parseFloat(height)) - (5 * parseFloat(age)) - 161;
        }
        return calculatedBMR;
    };

    const calculateBMI = () => {
        const heightInMeters = parseFloat(height) / 100; // convert cm to meters
        const calculatedBMI = parseFloat(weight) / (heightInMeters * heightInMeters);
        let category = '';
        // BMI Categories
        if (calculatedBMI < 18.5) {
            category = 'Kurus';
        } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
            category = 'Normal';
        } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
            category = 'Gemuk (Overweight)';
        } else {
            category = 'Obesitas';
        }
        return { value: calculatedBMI, category: category };
    };

    const calculateTDEE = (bmrValue) => {
        let tdeeValue;
        // Activity Multipliers
        switch (activityLevel) {
            case 'sedentary': // little or no exercise
                tdeeValue = bmrValue * 1.2;
                break;
            case 'lightlyActive': // light exercise/sports 1-3 days/week
                tdeeValue = bmrValue * 1.375;
                break;
            case 'moderatelyActive': // moderate exercise/sports 3-5 days/week
                tdeeValue = bmrValue * 1.55;
                break;
            case 'veryActive': // hard exercise/sports 6-7 days a week
                tdeeValue = bmrValue * 1.725;
                break;
            case 'extraActive': // very hard exercise/sports & physical job or 2x training
                tdeeValue = bmrValue * 1.9;
                break;
            default:
                tdeeValue = bmrValue * 1.2;
        }
        return tdeeValue;
    };

    const getActivityLevelDescription = (level) => {
        switch (level) {
            case 'sedentary': return 'Sangat Rendah';
            case 'lightlyActive': return 'Rendah';
            case 'moderatelyActive': return 'Sedang';
            case 'veryActive': return 'Tinggi';
            case 'extraActive': return 'Sangat Tinggi';
            default: return 'Tidak Diketahui';
        }
    };

    const getBmiCategoryColor = (category) => {
        switch (category) {
            case 'Kurus': return 'text-warningOrange';
            case 'Normal': return 'text-successGreen';
            case 'Gemuk (Overweight)': return 'text-warningOrange';
            case 'Obesitas': return 'text-errorRed';
            default: return 'text-mediumGrey';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setCalories(null);
        setBmr(null);
        setBmi(null);
        setBmiCategory('');

        if (!weight || !height || !age) {
            setError('Mohon lengkapi semua kolom input (Berat, Tinggi, Usia).');
            return;
        }

        if (parseFloat(weight) <= 0 || parseFloat(height) <= 0 || parseFloat(age) <= 0) {
            setError('Nilai berat, tinggi, dan usia harus lebih dari nol.');
            return;
        }
        if (parseFloat(weight) > 300 || parseFloat(height) > 250 || parseFloat(age) > 120) {
            setError('Nilai input tampaknya tidak realistis. Mohon periksa kembali.');
            return;
        }

        const calculatedBMR_value = calculateBMR();
        const { value: bmiValue, category: bmiCat } = calculateBMI();
        const calculatedTDEE = calculateTDEE(calculatedBMR_value);

        setBmr(calculatedBMR_value.toFixed(0));
        setBmi(bmiValue.toFixed(1));
        setBmiCategory(bmiCat);
        setCalories(calculatedTDEE.toFixed(0));
    };

    const getCalorieRecommendation = (tdeeValue) => {
        if (!tdeeValue) return null;

        const tdeeNum = parseFloat(tdeeValue);
        return (
            <div className="mt-8 p-6 bg-lightPrimary rounded-lg shadow-md animate-fade-in text-darkGrey">
                <h3 className="text-2xl font-bold text-primary mb-4">Rekomendasi Kalori Berdasarkan Tujuan:</h3>
                <ul className="space-y-3 text-lg">
                    <li>
                        <FaCheckCircle className="inline mr-3 text-successGreen" /> Untuk **Menjaga Berat Badan**: Sekitar <span className="font-bold text-darkPrimary">{tdeeNum}</span> Kalori/hari.
                    </li>
                    <li>
                        <FaDumbbell className="inline mr-3 text-infoBlue" /> Untuk **Menurunkan Berat Badan**: Kurangi sekitar 500 kalori dari TDEE Anda, menjadi sekitar <span className="font-bold text-darkPrimary">{Math.max(1200, tdeeNum - 500)}</span> Kalori/hari.
                    </li>
                    <li>
                        <FaRunning className="inline mr-3 text-warningOrange" /> Untuk **Meningkatkan Berat Badan**: Tambahkan sekitar 300-500 kalori dari TDEE Anda, menjadi sekitar <span className="font-bold text-darkPrimary">{tdeeNum + 400}</span> Kalori/hari.
                    </li>
                </ul>
                <p className="text-sm text-mediumGrey mt-6">
                    Rekomendasi ini adalah estimasi umum. Untuk rencana diet yang lebih personal dan aman, konsultasikan dengan ahli gizi atau dokter.
                </p>
            </div>
        );
    };

    return (
        <div className="bg-screen py-12 px-4 sm:px-6 lg:px-8 font-poppins">
            {/* Hero Section Calculator */}
            <section className="container mx-auto py-16 md:py-24 mb-16 flex flex-col items-center text-center animate-fade-in relative overflow-hidden">
                <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 leading-tight drop-shadow-lg z-10">
                    <span className="bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">Hitung Kebutuhan</span> Kalori Anda
                </h1>
                <p className="text-xl md:text-2xl text-darkGrey max-w-3xl mx-auto mb-8 leading-relaxed opacity-90 z-10">
                    Dapatkan estimasi kebutuhan energi harian dan status gizi Anda menggunakan algoritma Mifflin-St Jeor.
                </p>
                <div className="mt-12 md:mt-20 z-0 animate-fade-in-up delay-300">
                    <img src="/calculator-hero-illustration.svg" alt="Calorie Calculator Illustration" className="w-full max-w-xl mx-auto opacity-90" />
                </div>
            </section>

            {/* Form Kalkulator dalam Card yang Menarik */}
            <section className="container mx-auto py-12 mb-16 bg-white rounded-xl shadow-2xl p-8 md:p-12 animate-fade-in-up border-t-8 border-primary">
                <h2 className="text-4xl font-bold text-darkGrey mb-8 text-center bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                    Masukkan Data Diri Anda
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 max-w-3xl mx-auto">
                    {/* Input Berat Badan */}
                    <div className="animate-fade-in-left delay-100">
                        <label htmlFor="weight" className="block text-darkGrey text-lg font-semibold mb-2">
                            <FaWeight className="inline-block mr-2 text-primary" /> Berat Badan (kg):
                        </label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full py-3 px-4 bg-lightGrey/20 border-2 border-lightGrey rounded-lg text-darkGrey leading-tight focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-200 shadow-sm"
                            placeholder="Contoh: 70"
                            min="1"
                            required
                        />
                    </div>

                    {/* Input Tinggi Badan */}
                    <div className="animate-fade-in-right delay-200">
                        <label htmlFor="height" className="block text-darkGrey text-lg font-semibold mb-2">
                            <FaRulerVertical className="inline-block mr-2 text-primary" /> Tinggi Badan (cm):
                        </label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full py-3 px-4 bg-lightGrey/20 border-2 border-lightGrey rounded-lg text-darkGrey leading-tight focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-200 shadow-sm"
                            placeholder="Contoh: 175"
                            min="1"
                            required
                        />
                    </div>

                    {/* Input Usia */}
                    <div className="animate-fade-in-left delay-300">
                        <label htmlFor="age" className="block text-darkGrey text-lg font-semibold mb-2">
                            <FaBirthdayCake className="inline-block mr-2 text-primary" /> Usia (tahun):
                        </label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full py-3 px-4 bg-lightGrey/20 border-2 border-lightGrey rounded-lg text-darkGrey leading-tight focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-200 shadow-sm"
                            placeholder="Contoh: 30"
                            min="1"
                            required
                        />
                    </div>

                    {/* Select Jenis Kelamin */}
                    <div className="animate-fade-in-right delay-400">
                        <label htmlFor="gender" className="block text-darkGrey text-lg font-semibold mb-2">
                            {gender === 'male' ? <FaMale className="inline-block mr-2 text-primary" /> : <FaFemale className="inline-block mr-2 text-primary" />} Jenis Kelamin:
                        </label>
                        <div className="relative">
                            <select
                                id="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full py-3 px-4 bg-lightGrey/20 border-2 border-lightGrey rounded-lg text-darkGrey leading-tight focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-200 appearance-none shadow-sm"
                            >
                                <option value="male">Pria</option>
                                <option value="female">Wanita</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-mediumGrey">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Select Tingkat Aktivitas */}
                    <div className="col-span-1 md:col-span-2 animate-fade-in-up delay-500">
                        <label htmlFor="activityLevel" className="block text-darkGrey text-lg font-semibold mb-2">
                            <FaRunning className="inline-block mr-2 text-primary" /> Tingkat Aktivitas:
                        </label>
                        <div className="relative">
                            <select
                                id="activityLevel"
                                value={activityLevel}
                                onChange={(e) => setActivityLevel(e.target.value)}
                                className="w-full py-3 px-4 bg-lightGrey/20 border-2 border-lightGrey rounded-lg text-darkGrey leading-tight focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-200 appearance-none shadow-sm"
                            >
                                <option value="sedentary">Sangat Rendah (jarang berolahraga)</option>
                                <option value="lightlyActive">Rendah (olahraga 1-3 hari/minggu)</option>
                                <option value="moderatelyActive">Sedang (olahraga 3-5 hari/minggu)</option>
                                <option value="veryActive">Tinggi (olahraga 6-7 hari/minggu)</option>
                                <option value="extraActive">Sangat Tinggi (olahraga keras setiap hari)</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-mediumGrey">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Tombol Hitung Kalori */}
                    <div className="col-span-1 md:col-span-2 mt-4 animate-fade-in-up delay-600">
                        <button
                            type="submit"
                            className="inline-block bg-primary text-white font-bold text-xl px-10 py-4 rounded-full shadow-lg hover:bg-darkPrimary transition-all duration-300 ease-in-out transform hover:-translate-y-1 group w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            <FaCalculator className="inline-block mr-3 text-2xl" /> Hitung Kebutuhan Kalori
                            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </form>

                {/* Pesan Error */}
                {error && (
                    <div className="mt-8 p-4 bg-errorRed/10 border-l-4 border-errorRed text-errorRed rounded-lg flex items-center shadow-md animate-pop-in">
                        <FaExclamationCircle className="text-2xl mr-3" />
                        <p className="text-lg font-semibold">{error}</p>
                    </div>
                )}
            </section>

            {/* Bagian Hasil Kalkulasi */}
            {calories && bmr && bmi && bmiCategory && (
                <section className="container mx-auto py-12 mb-8 bg-white rounded-xl shadow-2xl p-8 md:p-12 animate-fade-in-up border-b-8 border-primary"> {/* MODIFIED: mb-16 -> mb-8 */}
                    <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                        Hasil Perhitungan Anda
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-center items-stretch">

                        {/* Kartu BMR */}
                        <div className="bg-lightPrimary p-6 rounded-lg shadow-md text-darkGrey animate-fade-in delay-100 flex flex-col justify-between border-b-4 border-primary">
                            <div>
                                <FaChartLine className="text-primary text-4xl mb-3 mx-auto" />
                                <h3 className="text-xl font-bold text-primary mb-1">BMR</h3>
                                <p className="text-4xl font-extrabold text-darkPrimary mb-1">{bmr}</p>
                                <p className="text-sm text-mediumGrey">Kalori/hari</p>
                            </div>
                            <p className="text-xs text-mediumGrey mt-auto pt-3 border-t border-mediumGrey/30">Basal Metabolic Rate</p>
                        </div>

                        {/* Kartu Tingkat Aktivitas */}
                        <div className="bg-lightPrimary p-6 rounded-lg shadow-md text-darkGrey animate-fade-in delay-200 flex flex-col justify-between border-b-4 border-primary">
                            <div>
                                <FaRunning className="text-primary text-4xl mb-3 mx-auto" />
                                <h3 className="text-xl font-bold text-primary mb-1">Aktivitas</h3>
                                <p className="text-2xl font-bold text-darkPrimary mb-1">{getActivityLevelDescription(activityLevel)}</p>
                                <p className="text-sm text-mediumGrey">Tingkat Aktivitas Fisik</p>
                            </div>
                            <p className="text-xs text-mediumGrey mt-auto pt-3 border-t border-mediumGrey/30">Berdasarkan pilihan Anda</p>
                        </div>

                        {/* Kartu TDEE (Kebutuhan Kalori Harian) */}
                        <div className="bg-lightPrimary p-6 rounded-lg shadow-md text-darkGrey animate-fade-in delay-300 flex flex-col justify-between border-b-4 border-primary">
                            <div>
                                <FaCalculator className="text-primary text-4xl mb-3 mx-auto" />
                                <h3 className="text-xl font-bold text-primary mb-1">TDEE</h3>
                                <p className="text-5xl font-extrabold text-darkPrimary mb-1">{calories}</p>
                                <p className="text-sm text-mediumGrey">Kalori/hari</p>
                            </div>
                            <p className="text-xs text-mediumGrey mt-auto pt-3 border-t border-mediumGrey/30">Total Daily Energy Expenditure</p>
                        </div>

                        {/* Kartu BMI */}
                        <div className="bg-lightPrimary p-6 rounded-lg shadow-md text-darkGrey animate-fade-in delay-400 flex flex-col justify-between border-b-4 border-primary">
                            <div>
                                <FaWeight className="text-primary text-4xl mb-3 mx-auto" />
                                <h3 className="text-xl font-bold text-primary mb-1">Status BMI</h3>
                                <p className="text-4xl font-extrabold text-darkPrimary mb-1">{bmi}</p>
                                <p className={`text-base font-semibold ${getBmiCategoryColor(bmiCategory)}`}>
                                    ({bmiCategory})
                                </p>
                            </div>
                            <p className="text-xs text-mediumGrey mt-auto pt-3 border-t border-mediumGrey/30">Indeks Massa Tubuh Anda</p>
                        </div>

                        {/* Kartu Rekomendasi Kalori Utama (TDEE) - Ini adalah kartu kelima di grid XL*/}
                        <div className="bg-primary p-6 rounded-lg shadow-md text-white animate-fade-in delay-500 flex flex-col justify-center border-b-4 border-darkPrimary">
                            <FaHandPointRight className="text-white text-5xl mb-3 mx-auto" />
                            <h3 className="text-xl font-bold text-white mb-1">Rekomendasi Utama</h3>
                            <p className="text-5xl font-extrabold text-white mb-1">{calories}</p>
                            <p className="text-sm text-white/80">Kalori/hari untuk menjaga berat badan</p>
                        </div>
                    </div>

                    {/* Rekomendasi Kalori Berdasarkan Tujuan (Bagian terpisah) */}
                    <div className="mt-10">
                        {getCalorieRecommendation(calories)}
                    </div>

                    <p className="text-sm text-mediumGrey mt-10 text-center leading-relaxed max-w-4xl mx-auto">
                        Angka-angka ini adalah estimasi berdasarkan algoritma Mifflin-St Jeor. Untuk rekomendasi nutrisi yang lebih akurat dan personal sesuai kondisi kesehatan Anda, selalu konsultasikan dengan ahli gizi atau dokter.
                    </p>
                </section>
            )}

            {/* Bagian Gunakan Aplikasi Untuk... (Muncul setelah hasil dihitung, sekarang dalam card) */}
            {calories && ( /* Hanya tampil jika hasil sudah ada */
                <section className="container mx-auto py-12 mb-16 bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center animate-fade-in-up delay-600"> {/* MODIFIED: Tambah bg-white rounded-xl shadow-2xl p-8 md:p-12 */}
                    <h2 className="text-4xl font-bold text-darkGrey mb-12 bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                        Gunakan VitaCal untuk:
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Kartu Tujuan 1 */}
                        <div className="bg-lightPrimary p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-100 group border-b-4 border-primary">
                            <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                                <FaDumbbell />
                            </div>
                            <h3 className="text-2xl font-semibold text-darkGrey mb-3">Manajemen Berat Badan</h3>
                            <p className="text-mediumGrey text-base">
                                Baik Anda ingin menurunkan, mempertahankan, atau meningkatkan berat badan, VitaCal akan memandu Anda.
                            </p>
                        </div>
                        {/* Kartu Tujuan 2 */}
                        <div className="bg-lightPrimary p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-200 group border-b-4 border-primary">
                            <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                                <FaBalanceScale />
                            </div>
                            <h3 className="text-2xl font-semibold text-darkGrey mb-3">Pola Makan Seimbang</h3>
                            <p className="text-mediumGrey text-base">
                                Pahami kebutuhan makro dan mikro Anda untuk menjaga asupan nutrisi yang proporsional setiap hari.
                            </p>
                        </div>
                        {/* Kartu Tujuan 3 */}
                        <div className="bg-lightPrimary p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-300 group border-b-4 border-primary">
                            <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                                <FaChartLine />
                            </div>
                            <h3 className="text-2xl font-semibold text-darkGrey mb-3">Lacak Progres Kesehatan</h3>
                            <p className="text-mediumGrey text-base">
                                Pantau kemajuan Anda dengan grafik intuitif dan laporan harian, mingguan, hingga bulanan.
                            </p>
                        </div>
                    </div>
                </section>
            )} {/* Tutup conditional rendering */}

            {/* Bagian Call to Action Akhir (REMOVED: Selalu ada di akhir halaman) */}
            {/* <section className="container mx-auto text-center py-16 bg-gradient-green-vitacal rounded-xl shadow-lg text-white animate-fade-in delay-900">
        <h2 className="text-4xl font-extrabold mb-6 drop-shadow-md">Siap Memulai Perjalanan Kesehatan Anda?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Mari hitung kebutuhan kalori Anda dan mulailah membangun kebiasaan makan yang lebih baik bersama VitaCal!
        </p>
        <Link
          to="/calculator"
          className="inline-block bg-white text-primary font-bold text-xl px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 group"
        >
          Hitung Kalori Saya Sekarang!
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </section> */}
        </div>
    );
}

export default CalculatorPage;