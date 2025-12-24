// ============================================
// CATCHEATER - Interactive Order System
// ============================================

// State management
const orderState = {
    strain: 'bl21de3-catcheater',
    geneName: '',
    geneSequence: '',
    promoter: 't7',
    resistance: 'amp',
    origin: 'puc',
    antidote: 'dual',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerPosition: '',
    organization: '',
    department: '',
    shippingAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    researchApplication: '',
    quantity: 1,
    timeline: 'standard',
    poNumber: '',
    additionalFeatures: '',
    specialRequests: ''
};

// DOM Elements
const elements = {
    strainSelect: document.getElementById('strain-type'),
    geneNameInput: document.getElementById('gene-name'),
    geneSequenceInput: document.getElementById('gene-sequence'),
    promoterSelect: document.getElementById('promoter'),
    resistanceSelect: document.getElementById('resistance'),
    originSelect: document.getElementById('origin'),
    antidoteSelect: document.getElementById('antidote-type'),
    additionalFeaturesInput: document.getElementById('additional-features'),
    customerNameInput: document.getElementById('customer-name'),
    customerEmailInput: document.getElementById('customer-email'),
    customerPhoneInput: document.getElementById('customer-phone'),
    customerPositionInput: document.getElementById('customer-position'),
    organizationInput: document.getElementById('organization'),
    departmentInput: document.getElementById('department'),
    shippingAddressInput: document.getElementById('shipping-address'),
    cityInput: document.getElementById('city'),
    stateInput: document.getElementById('state'),
    postalCodeInput: document.getElementById('postal-code'),
    countrySelect: document.getElementById('country'),
    researchApplicationInput: document.getElementById('research-application'),
    quantityInput: document.getElementById('quantity'),
    timelineSelect: document.getElementById('timeline'),
    poNumberInput: document.getElementById('po-number'),
    specialRequestsInput: document.getElementById('special-requests'),
    submitButton: document.getElementById('submit-order'),
    seqLength: document.getElementById('seq-length')
};

// Summary elements
const summaryElements = {
    strain: document.getElementById('summary-strain'),
    gene: document.getElementById('summary-gene'),
    promoter: document.getElementById('summary-promoter'),
    resistance: document.getElementById('summary-resistance'),
    origin: document.getElementById('summary-origin'),
    antidote: document.getElementById('summary-antidote')
};

// Status elements
const statusElements = {
    strain: document.getElementById('status-strain'),
    gene: document.getElementById('status-gene'),
    contact: document.getElementById('status-contact'),
    iconStrain: document.getElementById('status-icon-strain'),
    iconGene: document.getElementById('status-icon-gene'),
    iconContact: document.getElementById('status-icon-contact')
};

// ============================================
// Utility Functions
// ============================================

/**
 * Validates DNA sequence
 * @param {string} sequence - DNA sequence to validate
 * @returns {object} - Validation result with isValid and length
 */
function validateDNASequence(sequence) {
    const cleanSeq = sequence.replace(/\s/g, '').toUpperCase();
    const validBases = /^[ATGC]*$/;
    const isValid = validBases.test(cleanSeq) && cleanSeq.length > 0;

    return {
        isValid: isValid,
        length: cleanSeq.length,
        cleanSequence: cleanSeq
    };
}

/**
 * Updates the order summary display
 */
function updateOrderSummary() {
    // Strain
    const strainText = orderState.strain === 'bl21de3-catcheater'
        ? 'BL21(DE3) + Catcheater'
        : 'BL21(DE3) Basic';
    summaryElements.strain.textContent = strainText;

    // Gene
    summaryElements.gene.textContent = orderState.geneName || 'Not specified';

    // Promoter
    const promoterMap = {
        't7': 'T7 (IPTG)',
        'lac': 'lac (IPTG)',
        'ara': 'araBAD (Arabinose)',
        'trc': 'trc (IPTG)',
        'custom': 'Custom'
    };
    summaryElements.promoter.textContent = promoterMap[orderState.promoter] || orderState.promoter;

    // Resistance
    const resistanceMap = {
        'amp': 'Ampicillin',
        'kan': 'Kanamycin',
        'chlor': 'Chloramphenicol',
        'spec': 'Spectinomycin'
    };
    summaryElements.resistance.textContent = resistanceMap[orderState.resistance] || orderState.resistance;

    // Origin
    const originMap = {
        'puc': 'pUC (High)',
        'p15a': 'p15A (Medium)',
        'cole1': 'ColE1 (High)',
        'custom': 'Custom'
    };
    summaryElements.origin.textContent = originMap[orderState.origin] || orderState.origin;

    // Antidote
    const antidoteMap = {
        'dual': 'Dual-Plug',
        'repressor': 'Repressor',
        'srna': 'sRNA'
    };
    summaryElements.antidote.textContent = antidoteMap[orderState.antidote] || orderState.antidote;
}

/**
 * Updates the validation status
 */
function updateValidationStatus() {
    const checkIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
    const alertIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>';

    // Check strain
    const strainValid = orderState.strain !== '';
    statusElements.iconStrain.innerHTML = strainValid ? checkIcon : alertIcon;
    statusElements.iconStrain.style.color = strainValid ? 'var(--color-success)' : 'var(--color-text-muted)';
    statusElements.strain.textContent = strainValid ? 'Strain configured ✓' : 'Strain selection needed';
    statusElements.strain.style.color = strainValid ? 'var(--color-success)' : 'var(--color-text-muted)';

    // Check gene
    const geneValid = orderState.geneName !== '' && orderState.geneSequence !== '';
    statusElements.iconGene.innerHTML = geneValid ? checkIcon : alertIcon;
    statusElements.iconGene.style.color = geneValid ? 'var(--color-success)' : 'var(--color-warning)';
    statusElements.gene.textContent = geneValid ? 'Gene configured ✓' : 'Gene sequence needed';
    statusElements.gene.style.color = geneValid ? 'var(--color-success)' : 'var(--color-warning)';

    // Check contact
    const contactValid = orderState.customerName !== '' && orderState.customerEmail !== '';
    statusElements.iconContact.innerHTML = contactValid ? checkIcon : alertIcon;
    statusElements.iconContact.style.color = contactValid ? 'var(--color-success)' : 'var(--color-warning)';
    statusElements.contact.textContent = contactValid ? 'Contact info complete ✓' : 'Contact info needed';
    statusElements.contact.style.color = contactValid ? 'var(--color-success)' : 'var(--color-warning)';

    // Enable/disable submit button
    const allValid = strainValid && geneValid && contactValid;
    elements.submitButton.disabled = !allValid;

    if (allValid) {
        elements.submitButton.style.opacity = '1';
        elements.submitButton.style.cursor = 'pointer';
    } else {
        elements.submitButton.style.opacity = '0.5';
        elements.submitButton.style.cursor = 'not-allowed';
    }
}

/**
 * Updates the plasmid visualization
 */
function updatePlasmidVisualization() {
    // Update the center label with gene name if provided
    const centerLabel = document.querySelector('#plasmid-svg text[x="200"][y="195"]');
    if (centerLabel && orderState.geneName) {
        centerLabel.textContent = `p${orderState.geneName.replace(/\s+/g, '')}`;
    } else if (centerLabel) {
        centerLabel.textContent = 'pCatcheater';
    }

    // Color features based on selection
    const colorMap = {
        promoter: {
            't7': '#3b82f6',
            'lac': '#2563eb',
            'ara': '#8b5cf6',
            'trc': '#06b6d4',
            'custom': '#f59e0b'
        },
        resistance: {
            'amp': '#ef4444',
            'kan': '#f59e0b',
            'chlor': '#22c55e',
            'spec': '#8b5cf6'
        }
    };

    // Update promoter feature color and arrow
    const promoterFeature = document.getElementById('feature-promoter');
    const promoterArrow = document.querySelector('#feature-promoter-group polygon');
    if (promoterFeature) {
        const color = colorMap.promoter[orderState.promoter] || '#3b82f6';
        promoterFeature.setAttribute('stroke', color);
        if (promoterArrow) promoterArrow.setAttribute('fill', color);
    }

    // Update resistance feature color and arrow
    const resistanceFeature = document.getElementById('feature-resistance');
    const resistanceArrow = document.querySelector('#feature-resistance-group polygon');
    if (resistanceFeature) {
        const color = colorMap.resistance[orderState.resistance] || '#ef4444';
        resistanceFeature.setAttribute('stroke', color);
        if (resistanceArrow) resistanceArrow.setAttribute('fill', color);
    }

    // Update antidote color based on type
    const antidoteFeature = document.getElementById('feature-antidote');
    const antidoteArrow = document.querySelector('#feature-antidote-group polygon');
    const antidoteColorMap = {
        'dual': '#f59e0b',
        'repressor': '#f97316',
        'srna': '#fb923c'
    };
    if (antidoteFeature) {
        const color = antidoteColorMap[orderState.antidote] || '#f59e0b';
        antidoteFeature.setAttribute('stroke', color);
        if (antidoteArrow) antidoteArrow.setAttribute('fill', color);
    }

    // Update origin color based on type
    const originFeature = document.getElementById('feature-origin');
    const originMarker = document.querySelector('#feature-origin-group circle');
    const originLines = document.querySelectorAll('#feature-origin-group line');
    const originColorMap = {
        'puc': '#8b5cf6',
        'p15a': '#7c3aed',
        'cole1': '#a855f7',
        'custom': '#c084fc'
    };
    if (originFeature) {
        const color = originColorMap[orderState.origin] || '#8b5cf6';
        originFeature.setAttribute('stroke', color);
        if (originMarker) {
            originMarker.setAttribute('stroke', color);
        }
        originLines.forEach(line => line.setAttribute('stroke', color));
    }
}

// ============================================
// Event Listeners
// ============================================

// Strain selection
elements.strainSelect.addEventListener('change', (e) => {
    orderState.strain = e.target.value;

    // Show/hide Catcheater features
    const featuresDiv = document.getElementById('catcheater-features');
    if (orderState.strain === 'bl21de3-catcheater') {
        featuresDiv.classList.remove('hidden');
        featuresDiv.classList.add('fade-in');
    } else {
        featuresDiv.classList.add('hidden');
    }

    updateOrderSummary();
    updateValidationStatus();
});

// Gene name
elements.geneNameInput.addEventListener('input', (e) => {
    orderState.geneName = e.target.value;
    updateOrderSummary();
    updateValidationStatus();
    updatePlasmidVisualization();
});

// Gene sequence
elements.geneSequenceInput.addEventListener('input', (e) => {
    const sequence = e.target.value;
    orderState.geneSequence = sequence;

    const validation = validateDNASequence(sequence);
    elements.seqLength.textContent = validation.length;

    const sequenceInfo = document.getElementById('sequence-info');
    if (sequence && !validation.isValid) {
        sequenceInfo.style.color = 'var(--color-error)';
        sequenceInfo.innerHTML = `Invalid sequence. Please use only A, T, G, C characters. Length: ${validation.length} bp`;
    } else {
        sequenceInfo.style.color = 'var(--color-text-muted)';
        sequenceInfo.innerHTML = `Accepts standard DNA sequences. Length: <span id="seq-length">${validation.length}</span> bp`;
    }

    updateValidationStatus();
});

// Promoter selection
elements.promoterSelect.addEventListener('change', (e) => {
    orderState.promoter = e.target.value;
    updateOrderSummary();
    updatePlasmidVisualization();
});

// Resistance selection
elements.resistanceSelect.addEventListener('change', (e) => {
    orderState.resistance = e.target.value;
    updateOrderSummary();
    updatePlasmidVisualization();
});

// Origin selection
elements.originSelect.addEventListener('change', (e) => {
    orderState.origin = e.target.value;
    updateOrderSummary();
});

// Antidote selection
elements.antidoteSelect.addEventListener('change', (e) => {
    orderState.antidote = e.target.value;
    updateOrderSummary();
});

// Additional features
elements.additionalFeaturesInput.addEventListener('input', (e) => {
    orderState.additionalFeatures = e.target.value;
});

// Customer name
elements.customerNameInput.addEventListener('input', (e) => {
    orderState.customerName = e.target.value;
    updateValidationStatus();
});

// Customer email
elements.customerEmailInput.addEventListener('input', (e) => {
    orderState.customerEmail = e.target.value;
    updateValidationStatus();
});

// Organization
elements.organizationInput.addEventListener('input', (e) => {
    orderState.organization = e.target.value;
});

// Customer phone
elements.customerPhoneInput.addEventListener('input', (e) => {
    orderState.customerPhone = e.target.value;
});

// Customer position
elements.customerPositionInput.addEventListener('input', (e) => {
    orderState.customerPosition = e.target.value;
});

// Department
elements.departmentInput.addEventListener('input', (e) => {
    orderState.department = e.target.value;
});

// Shipping address
elements.shippingAddressInput.addEventListener('input', (e) => {
    orderState.shippingAddress = e.target.value;
});

// City
elements.cityInput.addEventListener('input', (e) => {
    orderState.city = e.target.value;
});

// State
elements.stateInput.addEventListener('input', (e) => {
    orderState.state = e.target.value;
});

// Postal code
elements.postalCodeInput.addEventListener('input', (e) => {
    orderState.postalCode = e.target.value;
});

// Country
elements.countrySelect.addEventListener('change', (e) => {
    orderState.country = e.target.value;
});

// Research application
elements.researchApplicationInput.addEventListener('input', (e) => {
    orderState.researchApplication = e.target.value;
});

// Quantity
elements.quantityInput.addEventListener('input', (e) => {
    orderState.quantity = parseInt(e.target.value) || 1;
});

// Timeline
elements.timelineSelect.addEventListener('change', (e) => {
    orderState.timeline = e.target.value;
});

// PO Number
elements.poNumberInput.addEventListener('input', (e) => {
    orderState.poNumber = e.target.value;
});

// Special requests
elements.specialRequestsInput.addEventListener('input', (e) => {
    orderState.specialRequests = e.target.value;
});

// Submit button
elements.submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    handleOrderSubmission();
});

// ============================================
// Order Submission
// ============================================

/**
 * Handles the order submission
 */
function handleOrderSubmission() {
    // Validate one more time
    if (orderState.customerName === '' || orderState.customerEmail === '' || orderState.geneSequence === '') {
        alert('Please fill in all required fields before submitting.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(orderState.customerEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate DNA sequence
    const validation = validateDNASequence(orderState.geneSequence);
    if (!validation.isValid) {
        alert('Please enter a valid DNA sequence (only A, T, G, C characters).');
        return;
    }

    // Create order summary
    const orderSummary = generateOrderSummary();

    // Display confirmation
    showOrderConfirmation(orderSummary);
}

/**
 * Generates a formatted order summary
 */
function generateOrderSummary() {
    const validation = validateDNASequence(orderState.geneSequence);

    return `
CATCHEATER ORDER REQUEST
========================

CUSTOMER INFORMATION:
---------------------
Name: ${orderState.customerName}
Email: ${orderState.customerEmail}
Phone: ${orderState.customerPhone || 'Not provided'}
Position: ${orderState.customerPosition || 'Not provided'}
Organization: ${orderState.organization || 'Not provided'}
Department: ${orderState.department || 'Not provided'}

SHIPPING ADDRESS:
-----------------
${orderState.shippingAddress || 'Not provided'}
${orderState.city || ''}, ${orderState.state || ''} ${orderState.postalCode || ''}
${orderState.country || 'Not provided'}

ORDER DETAILS:
--------------
Quantity: ${orderState.quantity}
Delivery Timeline: ${orderState.timeline}
Purchase Order #: ${orderState.poNumber || 'N/A'}

STRAIN CONFIGURATION:
---------------------
Strain Type: ${orderState.strain === 'bl21de3-catcheater' ? 'BL21(DE3) with integrated Catcheater system' : 'BL21(DE3) Basic'}

PLASMID CONFIGURATION:
----------------------
Target Gene: ${orderState.geneName}
Sequence Length: ${validation.length} bp
Promoter: ${orderState.promoter}
Resistance Marker: ${orderState.resistance}
Origin of Replication: ${orderState.origin}
Antidote Module: ${orderState.antidote}
${orderState.additionalFeatures ? `\nAdditional Features:\n${orderState.additionalFeatures}` : ''}

GENE SEQUENCE:
--------------
${validation.cleanSequence}

RESEARCH APPLICATION:
---------------------
${orderState.researchApplication || 'Not provided'}

SPECIAL REQUESTS:
-----------------
${orderState.specialRequests || 'None'}

Generated: ${new Date().toLocaleString()}
    `.trim();
}

/**
 * Shows order confirmation modal
 */
function showOrderConfirmation(summary) {
    // Create modal backdrop
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: var(--space-lg);
        animation: fadeIn 0.3s ease-in;
    `;

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'card';
    modalContent.style.cssText = `
        max-width: 800px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
    `;

    modalContent.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">Order Summary</h3>
        </div>
        
        <p style="margin-bottom: var(--space-lg);">
            Please review your order configuration below. In a production system, this would be submitted to our team for processing.
        </p>
        
        <div style="background: rgba(15, 8, 32, 0.5); padding: var(--space-lg); border-radius: var(--radius-md); border: 1px solid var(--glass-border); margin-bottom: var(--space-lg);">
            <pre style="font-family: 'Courier New', monospace; font-size: var(--text-sm); color: var(--color-text-secondary); white-space: pre-wrap; line-height: 1.6; margin: 0;">${summary}</pre>
        </div>
        
        <div style="display: flex; gap: var(--space-md); justify-content: flex-end;">
            <button id="copy-summary" class="btn btn-secondary">
                <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Copy to Clipboard
            </button>
            <button id="close-modal" class="btn btn-primary">Close</button>
        </div>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Add event listeners
    document.getElementById('close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    document.getElementById('copy-summary').addEventListener('click', () => {
        navigator.clipboard.writeText(summary).then(() => {
            const copyBtn = document.getElementById('copy-summary');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `
                <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Copied!
            `;
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    });

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// ============================================
// Smooth Scrolling
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    updateOrderSummary();
    updateValidationStatus();
    updatePlasmidVisualization();

    console.log('%c⚡ CATCHEATER System Initialized', 'color: #06b6d4; font-size: 16px; font-weight: bold;');
    console.log('Order system ready for customization.');
});
