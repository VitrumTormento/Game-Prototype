function lumbercampMultiplier() {
	switch (lumbercampCost.upgradeCount) {
    case 1000:
        general.lumbercampMultiplier = 15;
        break;
    case 500:
        general.lumbercampMultiplier = 10;
        break;
    case 400:
        general.lumbercampMultiplier = 9;
        break;
    case 300:
        general.lumbercampMultiplier = 8;
        break;
    case 250:
        general.lumbercampMultiplier = 7;
        break;
    case 100:
        general.lumbercampMultiplier = 6;
        break;
    case 50:
        general.lumbercampMultiplier = 5;
        break;
	case 25:
        general.lumbercampMultiplier = 4;
        break;
	case 10:
        general.lumbercampMultiplier = 3;
		break;
	case 5:
        general.lumbercampMultiplier = 2;
		break;
	default:
	console.log("Upgrade case switch checked (Lumbercamp). No multiplier granted.");
	}
}

function treasuryMultiplier() {
	switch (treasuryCost.upgradeCount) {
    case 1000:
        general.treasuryMultiplier = 15;
        break;
    case 500:
        general.treasuryMultiplier = 10;
        break;
    case 400:
        general.treasuryMultiplier = 9;
        break;
    case 300:
        general.treasuryMultiplier = 8;
        break;
    case 250:
        general.treasuryMultiplier = 7;
        break;
    case 100:
        general.treasuryMultiplier = 6;
        break;
    case 50:
        general.treasuryMultiplier = 5;
        break;
	case 25:
        general.treasuryMultiplier = 4;
        break;
	case 10:
        general.treasuryMultiplier = 3;
		break;
	case 5:
        general.treasuryMultiplier = 2;
		break;
	default:
	console.log("Upgrade case switch checked (Treasury). No multiplier granted.");
	}
}

function millMultiplier() {
	switch (millCost.upgradeCount) {
    case 1000:
        general.millMultiplier = 15;
        break;
    case 500:
        general.millMultiplier = 10;
        break;
    case 400:
        general.millMultiplier = 9;
        break;
    case 300:
        general.millMultiplier = 8;
        break;
    case 250:
        general.millMultiplier = 7;
        break;
    case 100:
        general.millMultiplier = 6;
        break;
    case 50:
        general.millMultiplier = 5;
        break;
	case 25:
        general.millMultiplier = 4;
        break;
	case 10:
        general.millMultiplier = 3;
		break;
	case 5:
        general.millMultiplier = 2;
		break;
	default:
	console.log("Upgrade case switch checked (Mill). No multiplier granted.");
	}
}

function mineMultiplier() {
	switch (mineCost.upgradeCount) {
    case 1000:
        general.mineMultiplier = 15;
        break;
    case 500:
        general.mineMultiplier = 10;
        break;
    case 400:
        general.mineMultiplier = 9;
        break;
    case 300:
        general.mineMultiplier = 8;
        break;
    case 250:
        general.mineMultiplier = 7;
        break;
    case 100:
        general.mineMultiplier = 6;
        break;
    case 50:
        general.mineMultiplier = 5;
        break;
	case 25:
        general.mineMultiplier = 4;
        break;
	case 10:
        general.mineMultiplier = 3;
		break;
	case 5:
        general.mineMultiplier = 2;
		break;
	default:
	console.log("Upgrade case switch checked (Mine). No multiplier granted.");
	}
}
