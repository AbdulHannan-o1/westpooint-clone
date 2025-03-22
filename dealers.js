const dealerData = [
    { 
        city: "KARACHI", 
        phones: "0321-2492610, 0213-2744178, 0213-2777760" 
    },
    { 
        city: "LAHORE", 
        phones: "0321-4567890, 0423-5678901, 0423-6789012" 
    },
    { 
        city: "ISLAMABAD", 
        phones: "0333-1234567, 0512-3456789, 0512-4567890" 
    },
    { 
        city: "PESHAWAR", 
        phones: "0345-6789012, 0912-3456789, 0912-4567890" 
    },
    { 
        city: "QUETTA", 
        phones: "0333-8901234, 0812-3456789, 0812-4567890" 
    },
    { 
        city: "MULTAN", 
        phones: "0300-1234567, 0614-5678901, 0614-6789012" 
    },
    { 
        city: "FAISALABAD", 
        phones: "0321-8901234, 0412-3456789, 0412-4567890" 
    },
    { 
        city: "RAWALPINDI", 
        phones: "0345-1234567, 0512-8901234, 0512-9012345" 
    },
    { 
        city: "GUJRANWALA", 
        phones: "0321-4567890, 0553-1234567, 0553-2345678" 
    },
    { 
        city: "SIALKOT", 
        phones: "0300-8901234, 0523-4567890, 0523-5678901" 
    },
    { 
        city: "HYDERABAD", 
        phones: "0333-2345678, 0229-8901234, 0229-9012345" 
    },
    { 
        city: "SUKKUR", 
        phones: "0321-6789012, 0712-3456789, 0712-4567890" 
    },
    { 
        city: "BAHAWALPUR", 
        phones: "0300-3456789, 0629-8901234, 0629-9012345" 
    },
    { 
        city: "SARGODHA", 
        phones: "0333-5678901, 0483-1234567, 0483-2345678" 
    },
    { 
        city: "SAHIWAL", 
        phones: "0321-9012345, 0404-5678901, 0404-6789012" 
    },
    { 
        city: "ABBOTTABAD", 
        phones: "0345-2345678, 0992-8901234, 0992-9012345" 
    },
    { 
        city: "MARDAN", 
        phones: "0333-6789012, 0937-1234567, 0937-2345678" 
    },
    { 
        city: "LARKANA", 
        phones: "0300-4567890, 0744-8901234, 0744-9012345" 
    }
];

function generateDealersList() {
    const container = document.querySelector('#AUTH-DE .col-12');
    let dealersHTML = '<h1 class="text-center" id="mainHead">Authorized Dealers</h1>';
    
    dealerData.forEach(dealer => {
        dealersHTML += `
        <span>
            <hr>
            <h2>${dealer.city}:</h2>
            <p>${dealer.phones}</p>
            
        </span>`;
    });

    container.innerHTML = dealersHTML;
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', generateDealersList);